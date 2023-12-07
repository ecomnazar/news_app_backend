const Categories = require('../model/categoriesModel')

exports.getCategories = async (req, res) => {
    const categories = await Categories.find()
    res.json(categories)
}

exports.addCategory = async (req, res) => {
    const category = new Categories({
        name: 'Business'
    })
    await category.save()
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
}