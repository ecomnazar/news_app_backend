const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'This category already exists']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
})

const Categories = mongoose.model('categories', categoriesSchema)
module.exports = Categories