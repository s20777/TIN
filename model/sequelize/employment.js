const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Employment = sequelize.define('Employment', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    salary: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDecimal :{
                msg: "Pole musi byc liczbą"
            }
        }
    },
    dateFrom: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        }
    },
    dateTo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    },
    dept_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    }
});

module.exports = Employment;