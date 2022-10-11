const { Schema, model } = require('mongoose');
const { categoryRSchema } = require('./CategoryRoom');

const roomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    discount:{
        type: Boolean,
        default: false,
    },
    price:{
        type: Number,
    }, 
    description: {
        type: String,
    },
    category: {
        type: categoryRSchema,
    },
    services: {
        type: []
    },
    available: {
        type: Boolean,
    }
})

module.exports = {
    roomSchema
}