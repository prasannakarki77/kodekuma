const mongoose = require("mongoose");

const Resource = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  type: { type: String, required: true },
});

module.exports = mongoose.model("Resource", Resource);
