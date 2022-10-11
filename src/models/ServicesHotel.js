const { Schema, model } = require('mongoose')

const servicesHotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    }
})

const ServicesH = model('ServicesH', servicesHotelSchema)

module.exports = {ServicesH}