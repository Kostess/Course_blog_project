const express = require('express');
const registrationRoutes = express.Router();
const registrationController = require('../controllers/registrationController');
const {body, validationResult} = require("express-validator");
const cors = require("cors");

registrationRoutes.post('/register',
    body('email').notEmpty().isEmail(),
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
    registrationController.registerUser);

registrationRoutes.post('/confirm', cors(), registrationController.confirmRegistration);

module.exports = registrationRoutes;