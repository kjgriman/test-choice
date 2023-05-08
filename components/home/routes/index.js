const express = require('express')

const HomeController = require('../controllers')

const router = express.Router()

router.get('/', HomeController.getHomeController)

module.exports = router
