const express = require('express')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'portifolio-api',
      version: '1.0.0',
      description: 'API endpoints for portifolio-master project documented on swagger.',
      contact: {
        name: "Gabriel Bastos",
        email: "gabrielbastosdev@gmail.com",
        url: "https://github.com/gbastosdev/portifolio-master"
      },
    },
  },
  apis: [`${__dirname}/routes/*.js`],
};

const specs = swaggerJsdoc(options);

const userRouter = require('./routes/userRouter')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use((req,res,next)  =>{
    req.requestTime = new Date().toISOString;
    next()
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', userRouter)

module.exports = app

