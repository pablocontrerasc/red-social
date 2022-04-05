 'use strict'

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 var PublicationSchema = Schema({
    create_at: {
        type: Date
    },
    texto: String,
    file: String,
    user: { type: Schema.ObjecId, ref:'User'}

 });

 module.exports = mongoose.model('Publication', PublicationSchema);