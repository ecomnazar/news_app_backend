const Banners = require("../model/bannersModel")

exports.getBanners = async (req,res) => {
    const banners = await Banners.find()
    res.json(banners)
}

exports.postBanner = async (req, res) => {
    Banners.create({
        title: 'Banner 1',
        image: 'image field'
    }).then((response) => res.json(response))
}