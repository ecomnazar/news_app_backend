const AllNews = require('../model/newsModel')

exports.getNews = async (req, res) => {
    const limit = 15; // Number of items per page
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
        const news = (await AllNews.find().limit(limit).skip((page - 1) * limit).exec()).reverse()
        const totalItems = await AllNews.countDocuments()
        res.json({
            news,
            totalItems
        })
    }
}

exports.getTrendNews = async (req, res) => {
    const news = await AllNews.find().sort({view: -1}).limit(7).exec()
    res.json(news)
}

exports.addNew = async (req, res) => {
    const read_time = Math.ceil(req.body.description.split(' ').length / 100) // get from description length
    const item = new AllNews({
        title: req.body.title,
        description: req.body.description,
        image: req.file.filename,
        source_link: req.body.sourceLink,
        source_title: req.body.sourceTitle,
        category_id: req.body.categoryId,
        category_name: req.body.categoryName,
        read_time: read_time
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