const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-s20777-sequelize', 'root', 'root', {
    dialect: 'mysql',
    host: 'mysql'
});

module.exports = sequelize;