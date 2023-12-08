const express = require('express')
const router = express.Router()
const categoriesController = require('../controller/categoriesController')

router.get('/', categoriesController.getCategories)
router.post('/', categoriesController.addCategory)
router.delete('/', categoriesController.deleteCategory)

module.exports = router