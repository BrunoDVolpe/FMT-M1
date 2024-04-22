const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");


const Professor = connection.define('professores', {
    nome: {
        type: DataTypes.STRING
    },
    // Ex. 1 - M1S12
    // Excluí a tabela professores, acrescentei email e password, rodei nova migração
    email: {
        type: DataTypes.STRING
    },
    password: {
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

/*
O certo para foreign key seria ter um ajuste na model especificando a relação com outra tabela. Ficaria como o exemplo abaixo:
Professor.belongsToMany(Curso)
Curso.hasMany( Professor, {foreignKey: id } )
Essa relação, de muitos para muitos, estará presente só em um dos modelos.
Existe uma alternativa de fazer isso por classe ou então colocar a relação em uma tabela auxiliar.
*/

module.exports = Professor