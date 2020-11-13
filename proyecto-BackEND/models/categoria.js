var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombreCategoria:String,
    color:String,
    img:String,
    tiendas:Array

});

module.exports = mongoose.model('categorias',esquema);