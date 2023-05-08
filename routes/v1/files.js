const files = require('../../components/files/routes')
const express = require('express')
const router = express.Router()

/**
 * @openapi
 * /api/v1/files:
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
 *                 payload:
 *                   type: object
 *                   example:
 *                     files: ["test1.csv","test2.csv","test3.csv","test18.csv","test4.csv","test5.csv","test6.csv","test9.csv","test15.csv"]
 */
router.get('/files', files)

/**
 * @openapi
 * /api/v1/file/{name} :
 *   get:
 *     tags:
 *       - details
 *     operationId: getFilesDetails
 *     parameters:
 *       - name: nameFile
 *         in: path
 *         description: name of document to return details
 *         required: true
 *         schema:
 *           type: string
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
 *                 payload:
 *                   type: string
 *                   example: file,text,number,hex\ntest2.csv,sDv,7\ntest2.csv,
 */
router.get('/file/:name', files)

/**
 * @openapi
 * /api/v1/files/data :
 *   get:
 *     tags:
 *       - files data formarter
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
 *                 payload:
 *                   type: array
 *                   example:
 *                     files: [{"file": "test1.csv"},{"file": "test2.csv","lines":[{"text":"jcYKuddlKLs","number":"929172958","hex":"c6f8ef8e501a4cf08a2c3169b390c9c7"},{"text":"KGNkAyevqrBdHLotykGLnflTXqbySQBA","number":"75","hex":"5ca85e5e9204b9320a790a35e05ee2e6"}]},]
 */
router.get('/files/data', files)

module.exports = router
