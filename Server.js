const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const Db = require('./Db')

const PORT = 6000
app.use(BodyParser.json())
const Route = require('./Route')
app.use('/',Route)
app.listen(PORT,()=>{
    console.log(`Server connect on ${PORT}`);
    
})