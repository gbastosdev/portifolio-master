const express = require("express")
const controller = require('../controllers/userController')
const router = express.Router();

router
.route('/users')
.get(controller.getUsers)
.post(controller.createUser);

router
.route('/user/:id')
.get(controller.getUser)
.patch(controller.updateUser)
.delete(controller.deleteUser);


module.exports = router