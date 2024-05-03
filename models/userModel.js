const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'O usuário necessita de um nome!']
    },
    email: {
        type: String,
        required: [true, 'O usuário necessita de um e-mail!'],
        unique: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    },
    portifolio: {
        intro:{
            title: String,
            description: String
        },
        projects:[{
            image: [String],
            title: String,
            description: String,
            skills: [String],
            link: String
        }],
        experience:[{
            companyName: String,
            jobTitle: String,
            startedAt: Date,
            finishedAt: Date,
            description: String
        }],
        education: [{
            institution: String,
            started: Date,
            finished: Date,
            complete: Boolean
        }],
        services: [{
            image: String,
            title: String,
            description: String
        }],
        contact: {
            linkedin: String,
            github: String,
            instagram: String,
            email: String,
            whatsapp: Number
        },
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User