var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var knex = require('knex');

router.get("/", function(req, res, next) {
    res.send("API is working properly..........");
    console.log(req.body);
});


module.exports = router;