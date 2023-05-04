const express = require( "express");

const FileController = require("../controllers");

const router = express.Router();

router.get('/files', FileController.getFilesController);

module.exports = router;