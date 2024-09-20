const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Ajuste o caminho se necessário

const Participante = sequelize.define('Participante', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Participante;
