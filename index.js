const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan())
app.use(express.json())

app.use((req,res,next)  =>{

}) 

