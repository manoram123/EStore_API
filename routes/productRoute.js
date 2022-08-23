const express = require("express");
const { addGame, myStore, gameData, removeGame, allGames, purchaseGame, myGames } = require("../controller/productController");
const { verifyUser } = require("../middleware/auth");
const router = express.Router();

router.route("/add-game").post( verifyUser, addGame)
router.route("/my-store").get( verifyUser, myStore)
router.route("/game-data/:id").get( verifyUser, gameData)
router.route("/remove-game/:id").delete( verifyUser, removeGame)
router.route("/all-games").get( allGames )
router.route("/purchase").post( verifyUser, purchaseGame )
router.route("/my-games").get( verifyUser, myGames )

module.exports = router;