const mongoose = require("mongoose");

const UserChallenge = mongoose.Schema({
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Challenge",
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "ongoing",
  },
  dateStarted: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserChallenge", UserChallenge);
