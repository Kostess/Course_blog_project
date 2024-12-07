const express = require('express');
const userRoutes = require('./routes/userRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const cors = require('cors');
const sequelize = require('./config/db');
const path = require('path');
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Разрешаем запросы с этого домена
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
    credentials: true // Разрешаем отправку куки и авторизационных данных
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'), {
    setHeaders: (res, filePath, stat) => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    }
}));

// Проверка подключения к базе данных
sequelize
    .authenticate()
    .then(() => {
        console.log('База данных подключена.');
    })
    .catch((err) => {
        console.error('Ошибка подключения к базе данных:', err);
    });

// Синхронизация моделей с базой данных
sequelize.sync()
    .then(() => {
        console.log('Модели успешно синхронизированы');
    })
    .catch(err => {
        console.error('Ошибка синхронизации моделей с базой данных:', err);
    });

app.use('/api', userRoutes);
app.use('/api', registrationRoutes);
app.use('/api', adminRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});