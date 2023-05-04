const files = require('../../components/files/routes')
const express = require('express')
const router = express.Router()

/**
 * @openapi
 * /api/v1/:
 *   get:
 *     tags:
 *       - files
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
router.get('/files', files)

module.exports = router
