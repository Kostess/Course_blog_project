const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Настройка nodemailer
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUser,
        pass: emailPass,
    },
});

exports.getAdminMessage = (req, res) => {
    const { name, email, select, message } = req.body;

    // Создаем объект сообщения
    const newMessage = {
        id: Date.now(),
        name,
        email,
        subject: select,
        message
    };

    // Сохраняем сообщение в файл
    const filePath = path.join(__dirname, '../../dataSite' , 'messages.json');
    let messages = [];

    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        console.log(`0 message ${messages.length}`);
        console.log(`fileContent: ${fileContent}`);
        messages = JSON.parse(fileContent);
    }
    console.log(`1 message ${messages.length}`);

    // Проверяем, что новое сообщение еще не существует в массиве
    const messageExists = messages.some(msg =>
        msg.name === newMessage.name &&
        msg.email === newMessage.email &&
        msg.subject === newMessage.subject &&
        msg.message === newMessage.message
    );

    if (!messageExists) {
        messages.push(newMessage);
    }

    console.log(`2 message ${messages.length}`);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
};

exports.getMessages = (req, res) => {
    const filePath = path.join(__dirname, '../../dataSite', 'messages.json');

    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const messages = JSON.parse(fileContent);
        res.status(200).json(messages);
    } else {
        res.status(200).json([]);
    }
};

exports.sendMessage = (req, res) => {
    const { id, email, replyMessage } = req.body;

    const filePath = path.join(__dirname, '../../dataSite', 'messages.json');
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        let messages = JSON.parse(fileContent);
        const messageIndex = messages.findIndex(msg => msg.id === id);

        if (messageIndex !== -1) {
            // Удаляем сообщение из массива
            messages.splice(messageIndex, 1);
        }

        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
    }

    // Отправляем письмо
    const mailOptions = {
        from: emailUser, // ваш email
        to: email,
        subject: 'Ответ на ваше сообщение',
        text: replyMessage
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Ошибка отправки письма');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Ответ отправлен');
        }
    });
};