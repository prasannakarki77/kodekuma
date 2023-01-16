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

const rewardBadge = asyncHandler(async (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { $push: { "stats.badges": req.params.badge } },
    {
      upsert: true,
      new: true,
    }
  )
    .then(() => {
      res.status(200).json({
        badge: req.params.badge,
        success: true,
      });
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        msg: e,
      });
    });
});

const rewardStars = asyncHandler(async (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    {
      $inc: {
        "stats.stars": req.params.stars,
      },
    }
  )
    .then(() => {
      res.status(200).json({
        stars: req.params.stars,
        success: true,
      });
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        msg: e,
      });
    });
});

const getAllUsers = asyncHandler(async (req, res) => {
  User.find()
    .sort({
      "stats.stars": "desc",
    })
    .then((users) => {
      res.status(200).json({
        success: true,
        data: users,
      });
    })
    .catch((e) => {
      res.status(404).json({
        success: false,
        msg: e,
      });
    });
});

module.exports = {
  getProfile,
  rewardBadge,
  rewardStars,
  getAllUsers,
};
