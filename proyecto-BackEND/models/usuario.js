var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String,
    fechaNacimiento: Date,
    icono: String,
    password: String,
    tipo: String,
    productoDeseados:Array,
    tiendasFavoritas:Array,
    plantillas: Array,
    plan:String

});

module.exports = mongoose.model('usuarios',esquema);