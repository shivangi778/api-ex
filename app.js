const express= require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/interns'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con =mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

app.use(express.json())

const internRouter = require('./routes/interns')
app.use('/interns',internRouter)

app.listen(3000,function(){
    console.log('Server started')
})
