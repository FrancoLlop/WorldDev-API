const { Schema } = require('mongoose')

const locationSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    continent:{
        type: String,
        required: true,
    },
})

module.exports = {
    locationSchema
}