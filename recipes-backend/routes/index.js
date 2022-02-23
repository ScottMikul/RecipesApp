const path = require("path")
const express = require("express")
const router = express.Router()
const recipes = require("./recipes.js")

router.use("/recipes",recipes)


module.exports = router;