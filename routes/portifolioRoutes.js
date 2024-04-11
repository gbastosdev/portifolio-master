const express = require("express")

const router = express.Router();

const getPortifolio = (req,res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime
    })
}

router
.route('/api/v1/portifolio')
.get(getPortifolio);


module.exports = router