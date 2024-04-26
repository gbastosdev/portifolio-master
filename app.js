const express = require('express')
const morgan = require('morgan')

const userRouter = require('./routes/userRouter')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use((req,res,next)  =>{
    req.requestTime = new Date().toISOString;
    next()
})

app.use('/user', userRouter)

module.exports = app

