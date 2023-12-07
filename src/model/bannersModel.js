const { default: mongoose } = require("mongoose");

const bannersSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
        required: true
    }
})

const Banners = mongoose.model('banner', bannersSchema)
module.exports = Banners