const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    source_title: {
        type: String,
        required: true
    },
    source_link: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
})

const AllNews = mongoose.model('allNews', newsSchema)
module.exports = AllNews