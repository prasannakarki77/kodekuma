const asyncHandler = require("express-async-handler");
const Challenge = require("../models/challengeModel");
const insertChallenge = asyncHandler(async (req, res) => {
  const data = new Challenge({
    challenge: req.body.challenge,
    image: req.file.filename,
    desc: req.body.desc,
    requirements: req.body.requirements,
    difficulty: req.body.difficulty,
    points: req.body.points,
    type: req.body.type,
    figma_link: req.body.figma_link,
    number:req.body.number
  });
  data
    .save()
    .then(() => {
      res
        .status(201)
        .json({ msg: "Challenge added successfully", success: true });
    })
    .catch((e) => {
      res.status(400).json({ msg: e, success: false });
    });
});

const getChallenges = asyncHandler(async (req, res) => {
  Challenge.find()
    .then((challenges) => {
      res.status(201).json({
        success: true,
        data: challenges,
      });
    })
    .catch((e) => {
      res.status(400).json({ msg: e, success: false });
    });
});

const getChallenge = asyncHandler(async (req, res) => {
  Challenge.find({ _id: req.params.id })
    .then((challenge) => {
      res.status(201).json({
        success: true,
        data: challenge,
      });
    })
    .catch((e) => {
      res.status(400).json({
        msg: e,
        success: false,
      });
    });
});

module.exports = {
  insertChallenge,
  getChallenges,
  getChallenge,
};
