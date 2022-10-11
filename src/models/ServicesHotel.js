const { Schema } = require('mongoose')

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

module.exports = {
    servicesHotelSchema
}