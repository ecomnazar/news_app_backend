const express = require('express')
const router = express.Router()
const categoriesController = require('../controller/categoriesController')

router.get('/', categoriesController.getCategories)
router.get('/generate', categoriesController.addCategory)

module.exports = router