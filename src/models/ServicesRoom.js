const { Schema } = require('mongoose');

const servicesRoomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
})

module.exports = {
    servicesRoomSchema
}