const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");


const Professor = connection.define('professores', {
    nome: {
        type: DataTypes.STRING
    },
    data_admissao: {
        type: DataTypes.DATE
    },
    data_demissao: {
        type: DataTypes.DATE
    },
    curso_id: {
        type: DataTypes.INTEGER
    }
})

module.exports = Professor