const Sequelize = require('sequelize')
const db = require('../database/db');

const Categorias = db.define(
    "Categorias",
    {
     id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
     nome:{
        type: Sequelize.STRING,
        allowNull: false
     },
     descricao:{
        type: Sequelize.STRING,
        allowNull: false,
     }
    },
    {tableName: "Categorias"}
    )

module.exports = Categorias;