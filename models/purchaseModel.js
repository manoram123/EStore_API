const mongoose = require('mongoose');

const purchase = mongoose.model("Purchase", {
    game: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    date: {type: Date, default: new Date(Date.now())}
})

module.exports = purchase;