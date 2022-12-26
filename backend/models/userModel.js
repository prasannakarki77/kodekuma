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
    badges: [
      {
        type: String,
        required: true,
      },
    ],
    stars: {
      type: Number,
      default: 0,
    },
    certificates: [
      {
        type: String,
        required: true,
      },
    ],
    upvotes: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = mongoose.model("User", User);
