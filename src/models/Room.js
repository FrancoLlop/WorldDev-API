const { Schema, model } = require('mongoose');
const { categorySchema } = require('./Category');
const { servicesRoomSchema } = require('./ServicesRoom');

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
        type: categorySchema,
    },
    services: {
        type: [servicesRoomSchema]
    }
})

module.exports = {
    roomSchema
}