const Sequelize = require('sequelize')
const Categorias = require('./Categorias')
const db = require('../database/db');

const Sucos = db.define(
    "Sucos",
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
     slug:{
      type: Sequelize.STRING,
      allowNull: false
      },
     descricao:{
        type: Sequelize.STRING,
        allowNull: false,
     },
     valor:{
        type: Sequelize.DOUBLE,
        allowNull: false,
     },
     linkFoto:{
        type: Sequelize.STRING,
        allowNull: false,
     },
     cor:{
        type: Sequelize.STRING,
        allowNull: false,
     },
     id_categoria:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Categorias,
            Key: "id"
        }     
     },
    },
    {tableName: "Sucos"}
    )

module.exports = Sucos;