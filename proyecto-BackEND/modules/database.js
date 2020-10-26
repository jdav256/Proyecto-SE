var mongoose = require('mongoose');
// Nombre BD: spotify
let bd ='ProyectoSE';
let port = '27017';
let host ='localhost';

class Database{
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then(function(result){
            console.log('se conecto a mongoDB');
        })
        .catch(error=>console.log(error));

    }
}

module.exports = new Database();