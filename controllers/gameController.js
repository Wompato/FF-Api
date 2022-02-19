const asyncHandler = require("express-async-handler");

const Game = require("../model/gameModel");

// @desc Get games
// @route GET /api/games
// @access Public
const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find();

  res.status(200).json(games);
});

// @desc Get game
// @route GET /api/games/:id
// @access Public
const getGame = asyncHandler(async (req, res) => {
  const { gameId } = req.params.id;

  const game = Game.find({ charId });

  res.status(200).json(game);
});

module.exports = {
  getGames,
  getGame,
};
