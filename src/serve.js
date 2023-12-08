const express = require('express')
const connectDB = require('./connection')
const bodyParser = require('body-parser')
const itemsRoute = require('./route/itemsRoute')
const bannersRoute = require('./route/bannersRoute')
const newsRoute = require('./route/newsRoute')
const categoriesRoute = require('./route/categoriesRoute')
const cors = require('cors')

// swagger
const swaggerUi = require('swagger-ui-express')
const apiDocumentation = require('./docs/apidoc.js')

const PORT = 4003
const app = express()

// connect DB
connectDB()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended: true }));
app.use(cors())
app.use(express.static('uploads'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Welcome to ePortal!')
})

// app.use('/items', itemsRoute)
// app.use('/banner', bannersRoute)
app.use('/api/v1/news', newsRoute)
app.use('/api/v1/categories', categoriesRoute)
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));



app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`)
})