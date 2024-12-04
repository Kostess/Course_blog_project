const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const {upload} = require("../controllers/userController");

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

userRoutes.put('/user-update/:id', cors(), upload.single('avatar'), userController.updateUser);

userRoutes.delete('/users-delete/:id', cors(), userController.deleteUser);

module.exports = userRoutes;