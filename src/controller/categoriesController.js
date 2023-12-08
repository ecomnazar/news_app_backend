const Categories = require('../model/categoriesModel')

exports.getCategories = async (req, res) => {
    const categories = await Categories.find()
    res.json(categories)
}

exports.addCategory = async (req, res) => {
    const category = new Categories({
        name: req.body.name
    })
    await category.save()
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
}

exports.deleteCategory = async (req, res) => {
    const id = req.body.id
    Categories.deleteOne({_id: id})
    .then(response => {
        res.json('success')
    })
    .catch(error => {
        res.json(error)
    })
}