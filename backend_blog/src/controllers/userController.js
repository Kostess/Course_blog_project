const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const jwtSecret = process.env.JWT_SECRET;

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const createToken = (user) => {
    return jwt.sign({ id: user.id, name: user.username, email: user.email }, jwtSecret, { expiresIn: '1h' });
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error); // Логирование ошибки в консоль
        res.status(500).json({ message: 'Server error', error: error.message }); // Отправка сообщения об ошибке клиенту
    }
};

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Хешируем пароль
        const hashedPassword = await hashPassword(password);

        // Создаем пользователя в базе данных
        const user = await User.create({ username, email, password_hash: hashedPassword });

        // Создаем JWT-токен
        const token = createToken(user);

        // Возвращаем токен клиенту
        res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Server error ${error}` });
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
        res.status(500).json({ message: `Ошибка сервера ${error}` });
    }
};