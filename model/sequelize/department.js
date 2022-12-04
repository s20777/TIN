const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Department = sequelize.define('Department', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    deptName: {
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
    budget: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDecimal:  {
                msg: "Pole powinno zawierać tylko litery"
            }
        }
    }
});

module.exports = Department;