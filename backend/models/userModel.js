const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: {
    type: String,
  },
  githubId: {
    type: String,
  },
});

module.exports = mongoose.model("User", User);
