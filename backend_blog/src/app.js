const express = require('express');
const pool = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});