const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco_de_dados', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql'  
});

module.exports = sequelize;
