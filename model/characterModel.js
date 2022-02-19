const mongoose = require("mongoose");

const characterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  height: String,
  age: Number,
  signatureWeapon: String,
  origin: String,
  description: String,
  pictures: [String],
});

module.exports = mongoose.model("Character", characterSchema);
