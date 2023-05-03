const home = require('../components/home/routes')

var express = require('express')
var router = express.Router()
router.use('/', (req, res) => {
    return res.json({message: 'welcome '})
})

module.exports = router
