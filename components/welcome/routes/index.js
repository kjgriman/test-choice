const express = require('express')

const WelcomeController = require('../controllers')

const router = express.Router()

router.get('/', WelcomeController.getWelcomeController)

module.exports = router
