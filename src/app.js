const express = require('express')
const app = express()
const routes=require('../src/posts/posts.router')
const database=require('./utils/database');
app.use(express.json());
require('dotenv').config()


database.authenticate()
    .then(()=>{
        console.log("las credenciales de la base de datos son correctas")
    })
    .catch((error)=>{
        console.log(error)
    })


    database.sync()
    .then(()=>{
        console.log("a base de datos ha sido sincronizada")
    })
    .catch((error)=>{
        console.log(error)
    })

app.use('/api/v1',routes)

app.listen(9000, () => {
    console.log('Ok!')
})

module.exports = app
