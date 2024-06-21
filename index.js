require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

require('./db/connection')  //connection.js file importing

const bServer = express()

bServer.use(cors())
bServer.use(express.json())

bServer.use(router)    //router mentioned here


const PORT = 3000 || process.env.PORT

bServer.listen(PORT,()=>{
    console.log(`Test backend server started at PORT : ${PORT}`)
})

bServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:darkblue;'>Test Server Started !!</h1>`)
})

bServer.post('/',(req,res)=>{
    res.status(200).send(`POST REQUEST`)
})