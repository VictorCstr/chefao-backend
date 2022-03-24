const Sequelize = require('sequelize')

const DB_NAME = "heroku_4c31935336cc15b";
const DB_USER = "b68f3d59fc5770";
const DB_PASS = "a8132c98";
const DB_CONFIG = {
    dialect: "mysql",
    host:"us-cdbr-east-05.cleardb.net",
    port:3306
};

let db = {}

    try {
        db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
    } catch(error){
       console.log(error) 
    }


    async function hasConection () {
        try{
            await db.authenticate()
            console.log('Sucesso na conexão com o banco de dados!')
        } catch (error){
            console.error("Houve um erro!")
        }
    }

    Object.assign(db, {hasConection} )


module.exports = db;