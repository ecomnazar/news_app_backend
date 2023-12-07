const express = require('express')
const bannersController = require('../controller/bannersController')

const router = express.Router()

router.get('/', bannersController.getBanners)

router.get('/generate', bannersController.postBanner)

module.exports = router