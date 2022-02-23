const path = require("path")
const express = require("express")
const router = express.Router()


router.route("/")
    .get((req,res)=>{
        console.log("we got the get got.")
    })



module.exports = router;