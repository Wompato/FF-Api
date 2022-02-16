const express = require("express");
const {
  getCharacters,
  getCharacter,
} = require("../controllers/characterController");

const router = express.Router();

router.get("/", getCharacters);

router.get("/:id", getCharacter);

module.exports = router;
