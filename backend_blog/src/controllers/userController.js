const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

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

        const token = jwt.sign({ id: user.id, name: user.username, email: user.email }, jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Ошибка авторизации:', error);
        res.status(500).json({ message: `Ошибка сервера при авторизации пользователя ${error}` });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: `Ошибка сервера при удалении пользователя ${error}` });
    }
};