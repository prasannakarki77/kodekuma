const asyncHandler = require("express-async-handler");
const Solution = require("../models/solutionModel");
const User = require("../models/userModel");
const { ObjectId } = require("mongodb");

const uploadSolution = asyncHandler(async (req, res) => {
  const files = req.files;
  let arr = [];
  files.map((file) => {
    arr.push(file.filename);
  });
  console.log(req.files);
  const data = new Solution({
    title: req.body.title,
    description: req.body.description,
    demoUrl: req.body.demoUrl,
    screenshots: arr,
    repoUrl: req.body.repoUrl,
    challengeId: req.body.challengeId,
    userId: req.body.userId,
  });
  data
    .save()
    .then(() => {
      res
        .status(201)
        .json({ msg: "Solution uploaded successfully", success: true });
    })
    .catch((e) => {
      console.log("arr");
      console.log(arr);
      res.status(400).json({
        msg: e,
        success: false,
      });
    });
});

const getSolution = asyncHandler(async (req, res) => {
  Solution.findOne({
    $and: [
      { userId: req.params.userId },
      { challengeId: req.params.challengeId },
    ],
  })
    .populate("feedback.userId")
    .populate("userId")
    .then((solution) => {
      res.status(200).json({
        success: true,
        data: solution,
      });
    })
    .catch((e) => {
      res.status(404).json({
        success: false,
        msg: e,
      });
    });
});

const getUserSolutions = asyncHandler(async (req, res) => {
  Solution.find({ userId: req.params.userId })
    .populate("challengeId")
    .then((solutions) => {
      res.status(200).json({
        success: true,
        data: solutions,
      });
    })
    .catch((e) => {
      res.status(404).json({
        success: false,
        msg: e,
        params: req.params.userId,
      });
    });
});

const getAllSolutions = asyncHandler(async (req, res) => {
  Solution.find()
    .populate("challengeId")
    .populate("userId")
    .then((solutions) => {
      res.status(200).json({
        success: true,
        data: solutions,
      });
    })
    .catch((e) => {
      res.status(404).json({
        success: false,
        msg: e,
      });
    });
});

const addUpvote = asyncHandler(async (req, res) => {
  Solution.updateOne(
    { _id: req.params.id },
    { $push: { upvotes: req.params.userId } },
    {
      new: true,
    }
  )
    .then(() => {
      User.updateOne(
        {
          _id: req.params.userId,
        },
        { $inc: { "stats.upvotes": 1 } }
      )
        .then()
        .catch();
      res.status(200).json({
        success: true,
        msg: "upvote added",
      });
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        msg: e,
      });
    });
});

const removeUpvote = asyncHandler(async (req, res) => {
  Solution.updateOne(
    { _id: req.params.id },
    { $pull: { upvotes: req.params.userId } }
  )
    .then(() => {
      User.updateOne(
        {
          _id: req.params.userId,
        },
        { $inc: { "stats.upvotes": -1 } }
      )
        .then()
        .catch();
      res.status(200).json({
        success: true,
        msg: "upvote removed",
      });
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        msg: e,
      });
    });
});

const addFeedback = asyncHandler(async (req, res) => {
  Solution.updateOne(
    { _id: req.params.id },
    {
      $push: {
        feedback: {
          userId: req.params.userId,
          feedbackText: req.body.feedbackText,
        },
      },
    }
  )
    .then(() => {
      res.status(200).json({
        success: true,
        msg: "feedback added",
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
  uploadSolution,
  getSolution,
  getUserSolutions,
  addUpvote,
  removeUpvote,
  addFeedback,
  getAllSolutions,
};
