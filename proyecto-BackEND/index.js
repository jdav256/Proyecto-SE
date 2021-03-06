var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
//var testModule = require('./modules/test-module');
var database = require('./modules/database'); 
// conexion con la base de datos
var usuariosRouter = require('./routes/usuarios-router');
var categoriasRouter = require('./routes/categorias-router');

//var cancionesRouter = require('./routes/canciones-router');

app.use(cors());// permita peticiones de otros origenes
app.use(bodyParser.json());
//permite obtener el arrchivo json del metodo post
app.use(bodyParser.urlencoded({extended:true}));
// permite enviar informacion en formato urlencoded
app.use('/usuarios',usuariosRouter);
app.use('/categorias',categoriasRouter);



app.get('/',function(req, res){
    res.send('Servidor Backend en Linea');
});


//puerto
app.listen(8888,function(){
    console.log('servidor levantado');
});