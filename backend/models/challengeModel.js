const mongoose = require("mongoose");

const Challenge = mongoose.Schema(
  {
    challenge: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    requirements: [
      {
        type: String,
        required: true,
      },
    ],
    difficulty: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    figma_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Challenge", Challenge);
