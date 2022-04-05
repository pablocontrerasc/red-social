'use strict'

const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
var userSchema = Schema({

    create_at: {
        type: Date,
    },
    name: String,
    surname: String,
    email: String,
    nick:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:String,
    image: String,
    region: String,
    comuna: String,
    descripcion: String,
});

//Export the model
module.exports = mongoose.model('User', userSchema);