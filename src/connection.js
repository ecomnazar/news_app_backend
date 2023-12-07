const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = mongoose.connect('mongodb://localhost:27017/news-app')
        console.log('db connect')
    } catch (error) {
        console.log(error)
        process.exit()      
    }
}

module.exports = connectDB