const asyncHandler = require("express-async-handler");

// @desc Get characters
// @route GET /api/characters
// @access Private
const getCharacters = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Characters" });
});

// @desc Get characters
// @route GET /api/characters/:id
// @access Private
const getCharacter = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Character ${req.params.id}` });
});

module.exports = {
  getCharacters,
  getCharacter,
};
