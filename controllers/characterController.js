const asyncHandler = require("express-async-handler");

const Character = require("../model/characterModel");

const getCharacters = asyncHandler(async (req, res) => {
  const { origin, name, gender } = req.query;
  const options = {
    origin,
    name,
    gender,
  };
  const validOptions = removeUndefKeys(options);
  if (validOptions) {
    const characters = await Character.find(validOptions);
    res.status(200).json(characters);
    return;
  }

  const characters = await Character.find();

  res.status(200).json(characters);
});

const getCharacter = asyncHandler(async (req, res) => {
  const { charId } = req.params.id;

  const character = Character.find({ charId });

  res.status(200).json(character);
});

module.exports = {
  getCharacters,
  getCharacter,
};
