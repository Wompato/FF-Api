const asyncHandler = require("express-async-handler");

const Monster = require("../model/monsterModel");

// @desc Get monsters
// @route GET /api/monsters
// @access Public
const getMonsters = asyncHandler(async (req, res) => {
  const { origin } = req.query;
  if (origin) {
    const monsters = await Monster.find({ origin: origin });
    res.status(200).json(monsters);
    return;
  }
  const monsters = await Monster.find();

  res.status(200).json(monsters);
});

// @desc Get monster
// @route GET /api/monsters/:id
// @access Public
const getMonster = asyncHandler(async (req, res) => {
  const { monId } = req.params.id;

  const monster = Monster.find({ monId });

  res.status(200).json(monster);
});

module.exports = {
  getMonsters,
  getMonster,
};
