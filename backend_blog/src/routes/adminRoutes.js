const express = require('express');
const cors = require("cors");
const adminRoutes = express.Router();
const adminController = require('../controllers/adminController')

const log = (req, res, next) => {
    console.log('Запрос получен:', req.method, req.url);
    console.log('Тело запроса:', req.body);
    next();
}

adminRoutes.post(`/admin-message`, cors(), adminController.getAdminMessage)
adminRoutes.get(`/admin-messages`, cors(), adminController.getMessages)
adminRoutes.post(`/send-message`, cors(), adminController.sendMessage)

module.exports = adminRoutes;