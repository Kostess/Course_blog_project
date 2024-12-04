const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const RegistrationModel = require("../models/registrationModel");

const jwtSecret = process.env.JWT_SECRET;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUser,
        pass: emailPass,
    },
});

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await hashPassword(password);

        // Генерируем токен подтверждения
        const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });

        // Создаем запись в таблице регистрации
        const registration = await RegistrationModel.create({
            username,
            email,
            password_hash: hashedPassword,
            token,
            expiresAt: new Date(Date.now() + 3600000), // Срок действия токена 1 час
        });

        // Отправляем письмо с токеном подтверждения
        const mailOptions = {
            from: emailUser,
            to: email,
            subject: 'Подтверждение регистрации',
            text: `Для подтверждения регистрации перейдите по ссылке: http://localhost:5173/confirm-page \n и вставьте токен: ${token}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Пользователь зарегистрирован. Проверьте вашу почту для подтверждения.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Ошибка сервера при регистрации пользователя ${error}` });
    }
};

exports.confirmRegistration = async (req, res) => {
    const { token } = req.body.token;
    try {
        // Проверяем, что токен является строкой
        if (typeof token !== 'string') {
            return res.status(400).json({ message: 'Неверный формат токена' });
        }

        // Проверяем токен
        jwt.verify(token, jwtSecret);
        // Ищем запись в таблице регистрации
        const registration = await RegistrationModel.findOne({where: {token, is_confirmed: false}});

        if (!registration) {
            return res.status(404).json({ message: 'Токен не найден или уже подтвержден' });
        }

        // Проверяем срок действия токена
        if (registration.expiresAt < new Date()) {
            return res.status(400).json({ message: 'Срок действия токена истек' });
        }

        // Обновляем запись в таблице регистрации, устанавливая is_confirmed в true
        await registration.update({ is_confirmed: true });

        // Возвращаем JSON с сообщением о подтверждении регистрации
        res.status(200).json({ message: 'Регистрация подтверждена' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Ошибка сервера при подтверждении регистрации ${error}` });
    }
};