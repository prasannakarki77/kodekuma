const mongoose = require("mongoose");

const Solution = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  demoUrl: {
    type: String,
  },
  screenshots: [
    {
      type: String,
    },
  ],
  repoUrl: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
  },
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Challenge",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Solution", Solution);
