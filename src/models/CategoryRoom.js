const { Schema } = require('mongoose')

const categoryRSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = {
    categoryRSchema
}