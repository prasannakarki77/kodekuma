const asyncHandler = require("express-async-handler");
const Challenge = require("../models/challengeModel");
const UserChallenge = require("../models/userChallengeModel");
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
    number: req.body.number,
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

const startChallenge = asyncHandler(async (req, res) => {
  const data = new UserChallenge({
    challengeId: req.body.challengeId,
    userId: req.body.userId,
  });
  console.log(data);
  data
    .save()
    .then(() => {
      res.status(201).json({ success: true, msg: "Challenge started" });
    })
    .catch((e) => {
      res.status(400).json({
        msg: e,
        success: false,
      });
    });
});

const checkIfStarted = asyncHandler(async (req, res) => {
  UserChallenge.find({
    $and: [
      { challengeId: req.params.challengeId },
      { userId: req.params.userId },
    ],
  })
    .then((userChallenge) => {
      if (userChallenge.length) {
        res.status(200).json({
          success: true,
          msg: "Challenge has already been started",
          challengeId: req.params.challengeId,
        });
      } else {
        res.status(404).json({
          success: false,
          msg: "Challenge not started",
          challengeId: req.params.challengeId,
        });
      }
    })
    .catch((e) => {
      res.status(400).json({
        msg: e,
      });
    });
});

const updateChallengeStatus = asyncHandler(async (req, res) => {
  UserChallenge.updateOne(
    {
      $and: [
        { challengeId: req.params.challengeId },
        { userId: req.params.userId },
      ],
    },
    {
      status: "completed",
    }
  )
    .then(() => {
      res.status(200).json({
        msg: "Challenge status completed",
        success: true,
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
  startChallenge,
  checkIfStarted,
  updateChallengeStatus,
};
