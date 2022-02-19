const asyncHandler = require("express-async-handler");

const Character = require("../model/characterModel");

// @desc Get characters
// @route GET /api/characters
// @access Private
const getCharacters = asyncHandler(async (req, res) => {
  const characters = await Character.find();

  res.status(200).json(characters);
});

// @desc Get characters
// @route GET /api/characters/:id
// @access Private
const getCharacter = asyncHandler(async (req, res) => {
  const { charId } = req.params.id;

  const character = Character.find({ charId });

  res.status(200).json(character);
});

module.exports = {
  getCharacters,
  getCharacter,
};
