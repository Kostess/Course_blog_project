const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ProfileModel = require("../models/profileModel");
const RegistrationModel = require("../models/registrationModel");
const fs = require('fs');
const path = require('path');

const jwtSecret = process.env.JWT_SECRET;

const deleteAvatarUser = (avatar) => {
    if (avatar) {
        const oldFilePath = path.join(__dirname, "../..", avatar);
        if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath);
        }
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
        res.status(500).json({ message: 'Ошибка сервера при получении пользователей', error: error.message });
    }
};

exports.getUsersId = async (req, res) => {
    try {
        const {id} = req.params;

        // Найти пользователя и включить связанный профиль
        const user = await User.findByPk(id, {
            attributes: ['user_id', 'username', 'email', 'role'], // Выбираем нужные поля из таблицы User
            include: [{
                model: ProfileModel,
                as: 'profile', // алиас
                attributes: ['bio', 'avatar'], // Выбираем нужные поля из таблицы Profile
            }],
        });

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        // Отправляем только нужные данные
        const responseData = {
            userId: user.user_id,
            username: user.username,
            email: user.email,
            role: user.role,
            bio: user.profile.bio,
            avatar: `http://localhost:3000${user.profile.avatar}`,
        };

        res.json(responseData);
    } catch (error) {
        console.error('Ошибка при получении данных о пользователе:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ errorUsername: 'Неверное имя пользователя' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (!passwordMatch) {
            return res.status(401).json({ errorPassword: 'Неверный пароль' });
        }

        const token = jwt.sign({ userId: user.user_id, username: user.username, email: user.email, role: user.role }, jwtSecret, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Ошибка авторизации:', error);
        res.status(500).json({ message: `Ошибка сервера при авторизации пользователя ${error}` });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, bio } = req.body;
        const avatar = req.file ? `/uploads/${req.file.filename}` : null;

        // Находим пользователя по user_id
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        // Обновляем данные пользователя
        await user.update({ username, email });

        // Находим профиль пользователя
        const profile = await ProfileModel.findOne({ where: { user_id: id } });

        if (!profile) {
            return res.status(404).json({ message: 'Профиль не найден' });
        }

        // Удаляем старый файл, если он существует
        deleteAvatarUser(profile.avatar);

        // Обновляем данные профиля
        const updateData = await profile.update({ bio, avatar });

        console.log("updateData: ", updateData);

        res.json({ message: 'Профиль успешно обновлен' });
    } catch (error) {
        console.error('Ошибка при обновлении профиля:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        const profile = await ProfileModel.findOne({where: { user_id: id }});
        if (!profile) {
            return res.status(404).json({ message: 'Профиль не найден' });
        }
        console.log("profile: ", profile)
        // Удаляем старый файл, если он существует
        deleteAvatarUser(profile.avatar);

        // Удаляем запись профиля из базы данных
        await profile.destroy();

        await RegistrationModel.destroy({ where: { user_id: id } });

        await user.destroy();
        console.log("Пользователь и профиль успешно удалены");
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: `Ошибка сервера при удалении пользователя ${error}` });
    }
};