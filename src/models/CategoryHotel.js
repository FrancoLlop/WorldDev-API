const { Schema } = require('mongoose')

const categoryHSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = {
    categoryHSchema
}