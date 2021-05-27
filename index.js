'use strict'

const mongoose = require('mongoose');
var app = require('./app')

const port = process.env.PORT || 3001;
mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/red-social', 
{useUnifiedTopology: true, useNewUrlParser : true ,useCreateIndex: true} ).then(()=>{
    console.log('La conexion a la DB fue realizada correctamente');
    app.listen(port, (error) =>{
        if (error) return console.log(`Error: ${error}`);
        console.log(`Servidor se encuentra funcionando en el puerto ${port}`)
    });
}).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))