const express = require( "express");

const homeController = require("../controllers");

const router = express.Router();

router.get("/", (req,res)=>{
    return res.status(200)
});

module.exports = router;