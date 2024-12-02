const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

userRoutes.get('/users-get', cors(), userController.getUsers);

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

userRoutes.delete('/users-delete/:id', userController.deleteUser);

module.exports = userRoutes;