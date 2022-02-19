const express = require("express");
const router = express.Router();

const { getGames, getGame } = require("../controllers/gameController");

router.get("/", getGames);

router.get("/:id", getGame);

module.exports = router;
