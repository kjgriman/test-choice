const home = require('../../components/home/routes')
const express = require('express')
const router = express.Router()

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a string.
 */
router.get('/', home)

module.exports = router
