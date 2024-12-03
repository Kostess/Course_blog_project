const { DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const ProfileModel = require("./profileModel");

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
    }
}, {
    tableName: 'users',
    timestamps: true,
});

// Определение отношений
User.hasOne(ProfileModel, {
    foreignKey: 'user_id',
    as: 'profile', // Алиас для связанного профиля
});

ProfileModel.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user', // Алиас для связанного пользователя
});

module.exports = User;