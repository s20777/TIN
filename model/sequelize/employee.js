const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Employee = sequelize.define('Employee', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args : [2,60],
                msg: "Pole powinno zawierac od 2 do 6 znakow"
            },
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args : [2,60],
                msg: "Pole powinno zawierac od 2 do 6 znakow"
            },
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args : [5,60],
                msg: "Pole powinno zawierac od 5 do 6 znakow"
            },
            isEmail: {
                msg: "Pole powinno zawierac prawidlowy adres email"
            }
        }
    }
});

module.exports = Employee;