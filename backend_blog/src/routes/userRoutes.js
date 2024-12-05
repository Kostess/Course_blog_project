const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const multer = require("multer");
const { existsSync, mkdirSync } = require("fs");
const { extname } = require("path");


// Настройка хранилища для файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(11111111111111111111111111111111111111111111);
        const dir = 'uploads/';
        if (!existsSync(dir)) {
            mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        console.log(222222222222222222222222222222222222222);
        cb(null, Date.now() + extname(file.originalname));
    }
});

const upload = multer({ storage });

userRoutes.get('/users-get', cors(), userController.getUsers);
userRoutes.get('/user/:id', cors(), userController.getUsersId);

userRoutes.post('/user-login',
    body('username').notEmpty(),
    body('password').notEmpty(),
    cors(),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    userController.loginUser
);

const log = (req, res, next) => {
    console.log('Content-Type:', req.headers['content-type']);
    console.log('file:', req.file);
    next();
}

userRoutes.put('/user-update/:id', cors(), upload.single('avatar'), log, userController.updateUser);

userRoutes.delete('/users-delete/:id', cors(), userController.deleteUser);

module.exports = userRoutes;