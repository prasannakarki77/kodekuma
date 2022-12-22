const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const getProfile = asyncHandler(async (req, res) => {
  User.findOne({ githubId: req.params.id })
    .then((profile) => {
      res.status(201).json({
        success: true,
        data: profile,
      });
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        msg: e,
      });
    });
});

module.exports = {
  getProfile,
};
