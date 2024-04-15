const express = require("express")
const controller = require('../controllers/protifolioController')
const router = express.Router();

router
.route('/')
.get(controller.getPortifolio);

module.exports = router