const { Schema, model } = require('mongoose');
const { locationSchema }  = require('./Location');
const { servicesHotelSchema } = require('./ServicesHotel');
const { roomSchema } = require('./Room')

const hotelSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
    },
    qualification:{
        type: Number,
    },
    description:{
        type: String,
    }, 
    location: {
        type: locationSchema,
    },
    services: {
        type: [servicesHotelSchema],
    },
    rooms: {
        type: [roomSchema]
    }
})

module.exports = model('Hotel', hotelSchema)