const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  releaseDate: String,
  description: String,
  pictures: [String],
});

module.exports = mongoose.model("Game", gameSchema);
