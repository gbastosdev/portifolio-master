const User = require('../models/userModel')

exports.createUser = async (req, res) => {

    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: 'success',
            data:{
                user: newUser
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data:{
                message: 'Invalid data sent!'
            }
        })
    }
    
}

exports.getUsers = async (req,res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json({
            status: 'success',
            results: allUsers.length,
            data:{
                allUsers
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}


exports.getUser = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data:{
                user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updateUser = async (req,res) => {
    try {
        const user = await User.updateOne(req.params.id)
        res.status(200).json({
            status: 'success',
            data:{
                'user_updated': user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const user = await User.deleteOne(req.params.id)
        res.status(200).json({
            status: 'success',
            data:{
                'user_deleted': user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}