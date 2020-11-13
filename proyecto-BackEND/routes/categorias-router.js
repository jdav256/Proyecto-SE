var express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();
var categoria = require('../models/categoria');

router.get('/',function(req, res) {
    categoria.find()
    .then(result=>{
        res.send(result)
        res.end();
    })
    .catch(error=>{
        res.send(error)
        res.end();
    });
});


module.exports = router;