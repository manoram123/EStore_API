const mongoose = require('mongoose');

const product = mongoose.model("Product", {
    game: {type: {}},
    game_title: {type: String},
    retailer: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    price: {type: Number},
    available: {type: Boolean, default: true},
    version: {type: String},
    platform: {type: String},
    cd_key: {type: String},
    discount: {type: Number, default: 0}
})

module.exports = product;