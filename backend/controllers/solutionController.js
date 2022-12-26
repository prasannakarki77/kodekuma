const asyncHandler = require("express-async-handler");
const Solution = require("../models/solutionModel");

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

module.exports = { uploadSolution };
