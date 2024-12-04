const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ProfileModel = require("../models/profileModel");
const {destroy} = require("../models/registrationModel");

const jwtSecret = process.env.JWT_SECRET;

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

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
            avatar: user.profile.avatar,
        };

        res.json(responseData);
    } catch (error) {
        console.error('Ошибка при получении данных о пользователе:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
}

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        const userCount = await User.count();
        const role = userCount === 0 ? 'admin' : 'user';

        const user = await User.create({
            username,
            email,
            password_hash: hashedPassword,
            role
        });

        res.status(201).json({ message: 'Пользователь успешно создан', isCreated: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Ошибка сервера при создании пользователя ${error}` });
    }
};

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
        console.log(token);
        res.json({ token });
    } catch (error) {
        console.error('Ошибка авторизации:', error);
        res.status(500).json({ message: `Ошибка сервера при авторизации пользователя ${error}` });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const { username, email, bio, avatar } = req.body;

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

        // Обновляем данные профиля
        console.log(`bio: ${bio}, avatar: ${avatar}`);
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

        // Удаляем связанные записи из таблиц profiles и registrations
        await ProfileModel.destroy({ where: { user_id: id } });
        await destroy({ where: { user_id: id } });

        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: `Ошибка сервера при удалении пользователя ${error}` });
    }
};