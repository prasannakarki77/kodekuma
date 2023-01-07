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
  profileImg: {
    type: String,
    required: true,
  },
  stats: {
    badges: [
      {
        type: String,
      },
    ],
    stars: {
      type: Number,
      default: 0,
    },
    certificates: [
      {
        type: String,
      },
    ],
    upvotes: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = mongoose.model("User", User);
