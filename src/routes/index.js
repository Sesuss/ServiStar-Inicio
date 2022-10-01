const express = require("express")
const router = express.Router()
const pool = require("../database")
const pdfc =require("../routes/pdf")
var moment = require('moment');
const {isLoggedIn, isAdmin} = require("../lib/auth")

const log = console.log

//Principal
router.get("/",  (req, res) => { 
    res.render("layouts/inicio3")
})


module.exports = router