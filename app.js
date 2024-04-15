const express = require('express')
const morgan = require('morgan')

const portifolioRouter = require('./routes/portifolioRoutes')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use((req,res,next)  =>{
    req.requestTime = new Date().toISOString;
    next()
})

app.use('/api/v1/portifolio', portifolioRouter)

module.exports = app

