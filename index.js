const express = require('express')
const routes = require('./routes/index')
const db = require('./database/db')
const port = process.env.PORT || 8080

const app = express()

db.hasConection()
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(routes)

app.listen(port, ()=>{
    console.log('O Servidor está rodando na porta:'+ port)
})