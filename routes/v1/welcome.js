const welcome = require('../../components/welcome/routes')
const express = require('express')
const router = express.Router()

/**
 * @openapi
 * /api/v1/:
 *   get:
 *     tags:
 *       - Welcome
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: SUCCESS
 *                 data:
 *                   type: object
 *                   items:
 *                     type: object
 */
router.get('/', welcome)

module.exports = router
