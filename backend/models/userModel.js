const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  githubId: {
    type: String,
    required: true,
  },
  stats: {
    badges: {
      type: Number,
      default: 0,
    },
    stars: {
      type: Number,
      default: 0,
    },
    certificates: {
      type: Number,
      default: 0,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = mongoose.model("User", User);
