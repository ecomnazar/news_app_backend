const AllNews = require('../model/newsModel')

exports.getNews = async (req, res) => {
    const limit = 10; // Number of items per page
    const page = req.query.page ? parseInt(req.query.page) : 1; 
    if(req.query.category){
        const news = await AllNews.find({
            category_name: req.query.category
        }).limit(limit).skip((page - 1) * limit).exec()
        const totalItems = await AllNews.countDocuments({
            category_name: req.query.category
        })
        res.json({
            news,
            totalItems
        })
    } else{
        const news = await AllNews.find().limit(limit).skip((page - 1) * limit).exec()
        const totalItems = await AllNews.countDocuments()
        res.json({
            news,
            totalItems
        })
    }
}

exports.addNew = async (req, res) => {
    const item = new AllNews({
        title: req.body.title,
        description: req.body.description,
        image: req.file.filename,
        source_link: req.body.sourceLink,
        source_title: req.body.sourceTitle,
        category_id: req.body.categoryId,
        category_name: req.body.categoryName
    })
    await item.save()
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
}

exports.deleteNew = (req, res) => {
    const id = req.body.id
    AllNews.deleteOne({_id: id})
    .then(() => {
        res.json('success')
    })
    .catch(error => {
        res.send(error)
    })
}


exports.updateView = (req, res) => {
    const id = req.params.id
    AllNews.updateOne({_id: id}, {$inc: {view: 1}})
    .then(() => {
        res.send('success')
    })
    .catch(error => {
        res.send(error)
    })
}