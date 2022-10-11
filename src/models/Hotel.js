const { Schema, model } = require('mongoose');
const { locationSchema }  = require('./Location');
const { roomSchema } = require('./Room')
const { categoryHSchema } = require('./CategoryHotel')

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
        type: [],
    },
    category: {
        type: categoryHSchema, 
    },
    rooms: {
        type: [roomSchema]
    },
    event: {
        type: [],
    },
})

const Hotel = model('Hotel', hotelSchema)

module.exports = {Hotel}