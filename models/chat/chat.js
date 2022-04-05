'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = Schema({
    
    create_at: {
        type: Date,
    },
    emitter: {
        type: Schema.ObjectId,
        ref:'User',
        require:true},
    receiver: {
        type: Schema.ObjectId,
        ref:'User',
        require:true},
    texto: String,
    fecha: Date,
    visto: String
});
module.exports = mongoose.model('Chat', ChatSchema);