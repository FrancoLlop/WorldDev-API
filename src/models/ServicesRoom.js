const { Schema, model } = require('mongoose');

const servicesRoomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
})

const ServicesR = model('ServicesR', servicesRoomSchema)

module.exports = {ServicesR}