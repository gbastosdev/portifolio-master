const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({path:'./config.env'})
const app = require('./app')

const DB_LOCAL = process.env.DATABASE_LOCAL
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose
.connect(DB)
.then(()=> console.log('DB connection successful!'))

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`App running on port ${port}...`)
})