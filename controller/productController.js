const product = require("../models/productModel")
const purchase = require("../models/purchaseModel")

exports.addGame = async (req, res) => {
    const product_ = new product(req.body)
    console.log(product_.platform)
    product_.retailer = req.userInfo._id
    const data = await product.findOne({ retailer: req.userInfo._id, game_title: product_.game_title })
    if (data) {
        res.json({ message: "This title is already in your store", success: false })
    } else {
        product_.save()
        res.json({ message: "Game has been added to your store", success: true })
    }
}

exports.myStore = async (req, res) => {
    const games = await product.find({ retailer: req.userInfo._id })
    res.json(games)
}

exports.gameData = async (req, res) => {
    const game = await product.findById(req.params.id).populate('retailer')
    res.json(game)
}

exports.removeGame = async (req, res) => {
    product.findByIdAndDelete(req.params.id).then(() => {
        res.json({ message: 'The game has been removed', success: true })
    })
}

exports.purchaseGame = async (req, res) => {
    const purchase_ = new purchase(req.body)
    console.log(req.body)
    const purchased = await purchase.findOne({ user: req.userInfo._id, game: req.body.game })
    if (purchased) {
        res.json({ message: "Game is already in your collection", success: false })
    } else {
        const game = await product.findById({ _id: req.body.game })
        if (game.available) {
            purchase_.save()
            product.findByIdAndUpdate(req.body.game, { available: false }, (err, docs) => {
                if (!err) {
                    res.json({ message: "Game purchased", success: true })
                }
            })
        }else{
            res.json({message: "Game has been sold already", success: false})
        }
    }
}


exports.allGames = async (req, res) => {
    const games = await product.find()
    res.json(games)
}

exports.myGames = async(req, res) => {
    const games = await purchase.find({user: req.userInfo._id}).populate('game')
    res.json(games)
}