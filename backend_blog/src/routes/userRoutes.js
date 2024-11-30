const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

router.get('/users', cors(), userController.getUsers);

router.post('/users',
    body('email').notEmpty().isEmail(),
    body('username').notEmpty(),
    body('password').notEmpty(),
    cors(),
    async (req, res, next) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    userController.createUser
);

router.delete('/users/:id', userController.deleteUser);

module.exports = router;