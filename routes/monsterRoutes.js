const express = require("express");
const router = express.Router();

const { getMonsters, getMonster } = require("../controllers/monsterController");

router.get("/", getMonsters);

router.get("/:id", getMonster);

module.exports = router;
