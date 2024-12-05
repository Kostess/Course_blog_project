const { DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const ProfileModel = sequelize.define('Profile', {
    profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'user_id',
        },
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'profiles',
    timestamps: true,
});

module.exports = ProfileModel;