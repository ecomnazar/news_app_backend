const Items = require("../model/itemsModel")
const names = ['John', 'Emma', 'Michael', 'Sophia', 'William', 'Olivia', 'James', 'Ava', 'Benjamin', 'Isabella', 'Mason', 'Mia', 'Alexander', 'Charlotte', 'Daniel', 'Amelia', 'Matthew', 'Harper', 'Henry', 'Evelyn', 'Joseph', 'Abigail', 'Samuel', 'Emily', 'David', 'Elizabeth', 'Ethan', 'Sofia', 'Andrew', 'Ella']
const descriptions = [
    "A sleek and modern laptop with a powerful processor, perfect for work and entertainment.",
    "Wireless earbuds with noise-canceling technology for an immersive audio experience on the go.",
    "Smart thermostat that learns your preferences and helps you save energy effortlessly.",
    "High-performance gaming mouse with customizable buttons and RGB lighting effects.",
    "Classic leather watch with a timeless design, suitable for any occasion.",
    "Compact and efficient blender for making smoothies, shakes, and more.",
    "Durable and stylish backpack with multiple compartments for organized daily use.",
    "HD webcam with built-in microphone for crystal-clear video calls and streaming.",
    "Portable power bank with fast charging capabilities, ensuring you stay connected all day.",
    "Fitness tracker with heart rate monitoring, sleep analysis, and GPS for accurate activity tracking.",
    "Premium coffee maker with programmable settings for the perfect cup every time.",
    "Ultra-thin LED TV with 4K resolution and smart features for a cinematic viewing experience.",
    "Versatile chef's knife with a sharp blade and ergonomic handle for precise cutting.",
    "Compact air purifier for a healthier living space, removing allergens and pollutants.",
    "Stylish and comfortable sneakers with advanced cushioning for all-day wear.",
    "Smart home security camera with motion detection and two-way audio communication.",
    "Ergonomic office chair with adjustable features for maximum comfort during work hours.",
    "Interactive educational tablet for children, making learning fun and engaging.",
    "Professional-grade hair dryer with multiple heat and speed settings for salon-quality results.",
    "Premium stainless steel water bottle, keeping your drinks hot or cold for hours.",
    "Colorful and vibrant art supplies kit for aspiring artists and creative minds.",
    "Portable Bluetooth speaker with high-quality audio for music lovers on the move.",
    "Advanced digital thermostat for precise temperature control in your home.",
    "Gourmet cookware set with non-stick surfaces for easy cooking and cleaning.",
    "Compact folding bike for convenient and eco-friendly transportation.",
    "Digital drawing tablet for graphic designers and artists, unleashing creativity.",
    "Soft and luxurious bedding set for a comfortable and restful night's sleep.",
    "Rugged and waterproof action camera for capturing adventures in any environment.",
    "Versatile kitchen gadget set for efficient food preparation and cooking.",
    "High-capacity external hard drive for secure storage of your important files."
  ]

exports.getItems = async (req, res) => {
    // const randomNumber = Math.floor(Math.random() * names.length)
    // Items.create({
    //     title: names[randomNumber],
    //     description: 'Very good',
    //     view: 0,
    //     like: 0,
    //     image: 'custom image',
    // })
    const limit = 6; // Number of items per page
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const items = await Items.find().limit(limit).skip((page - 1) * limit).exec()
    const totalItems = await Items.countDocuments()
    res.json({
        items,
        totalItems
    })
}

exports.generateItem = async (req, res) => {
    const randomNumber = Math.floor(Math.random() * 25)
    Items.create({
        title: names[randomNumber],
        description: descriptions[randomNumber],
        view: 0,
        like: 0,
        image: req.file.filename,
    }).then((response) => res.json(response))
}

exports.addItem = async (req, res) => {
    const item = new Items({
        title: req.body.title,
        description: req.body.description,
        view: 0,
        like: 0,
        image: req.file.filename,
    })
    await item.save()
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
}