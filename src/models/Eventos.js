const { Schema, model } = require('mongoose');

const eventoSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
    },
    description:{
        type: String,
    }, 
    date:{
        type: Date,
    },
    price:{
        type: Number,
    }
})

const Evento = model('Evento', eventoSchema)

module.exports = {Evento}