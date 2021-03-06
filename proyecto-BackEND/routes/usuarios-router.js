var express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();
var usuario = require('../models/usuario');


//obtener todos los usuario
router.get('/',function(req, res) {
    res.send("todos los usuarios ");
    res.end();
});


// login usuario
router.post('/login',function (req, res) {
    usuario.findOne({
        email:req.body.email,
        password:req.body.password
    },{})
    .then(result=>{
        if(result==null){
            res.send("usuario y contraseña no coinciden");
            res.end();
        }else{
            res.send(result);
            res.end();
        }
        
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});;



//obtener los usuarios tipo cliente
router.get('/clientes',function(req, res) {
    res.send("todos los usuarios tipo cliente");
    res.end();
});

//obtener los usuarios tipo empresario
router.get('/empresas',function(req, res) {
    res.send("todos los usuarios tipo empresa");
    res.end();
});

//crear un usuario tipo cliente
router.post('/clientes',function(req, res) {
    
    let u= new usuario({
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        email:req.body.email,
        fechaNacimiento:req.body.fechaNacimiento,
        password:req.body.password,
        tipo:"Cliente"
        
    });
    u.save()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    
});

//crear un usuario tipo empresa
router.post('/empresas',function(req, res) {
    res.send("generar usuario tipo empresa");
    res.end();
});




//crear  un usuario
/* router.post('/',function(req,res){
 let u= new usuario({
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    email:req.body.email,
    fechaNacimiento: {
        dia:req.body.dia,
        mes:req.body.mes,
        anio:req.body.anio
    },
    pais: req.body.pais
 }); 
 
    u.save().then(result=>
        {res.send(result);
        res.end();   
        })
    .catch(error => {
        res.send(error);
        res.end();
    });

    

    }); */

//obtener un usuario
/* router.get('/:id',function(req,res){
    
    usuario.find({_id:req.params.id})
    .then(result=>
        {res.send(result[0]);
         res.end();   
        })
    .catch(error => {
        res.send(error);
        res.end();
    });
    
}); */
//obtener todos los usuario
/* router.get('/',function(req,res){
    usuario.find()
    .then(result=>
        {res.send(result);
         res.end();   
        })
    .catch(error => {
        res.send(error);
        res.end();
    });
});
 *///actualizar usuario
/* router.put('/:id',function(req,res){
   usuario.update({
       _id:req.params.id
   },
    {
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        email:req.body.email,
        fechaNacimiento: {
            dia:req.body.dia,
            mes:req.body.mes,
            anio:req.body.anio
        },
        pais: req.body.pais
     })
     .then(result=>
        {res.send(result);
         res.end();   
        })
    .catch(error => {
        res.send(error);
        res.end();
    }); 

}); */

//eliminar un usuario
/* router.delete('/:id',function(req,res){
    usuario.remove({
        _id:req.params.id
    })
    .then(result=>
        {res.send(result);
         res.end();   
        })
    .catch(error => {
        res.send(error);
        res.end();
    }); 
});
 */


module.exports = router;