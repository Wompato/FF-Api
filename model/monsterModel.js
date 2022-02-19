const mongoose = require("mongoose");

const monsterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  origin: String,
  description: String,
  pictures: [String],
});

module.exports = mongoose.model("Monster", monsterSchema);
