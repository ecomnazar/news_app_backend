const express = require('express')
const itemsController = require('../controller/itemsController')
const router = express.Router()
const multer = require('multer')


let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, res, cb) => {
        cb(null, res.fieldname + '_' + Date.now() + '_' + res.originalname)
    }
})

let upload = multer({
    storage: storage
}).single('image')

// all items

router.get('/', itemsController.getItems)
router.get('/generate', itemsController.generateItem)

// post

router.post('/', upload, itemsController.addItem)

module.exports = router