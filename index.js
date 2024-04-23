const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({path:'./config.env'})
const app = require('./app')
const userModel = require('./schemas/userSchema')

const DB_LOCAL = process.env.DATABASE_LOCAL
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose
.connect(DB)
.then(()=> console.log('DB connection successful!'))

const testUser = new userModel({
    name: "Tx",
    email: "txdev@gmail.com"
})

testUser.save().then(doc=>{
    console.log(doc)
}).catch(err=>{
    console.log(err)
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`App running on port ${port}...`)
})