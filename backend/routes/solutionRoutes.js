const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const {
  uploadSolution,
  getSolution,
  getUserSolutions,
  addUpvote,
  removeUpvote,
  addFeedback,
  getAllSolutions,
} = require("../controllers/solutionController");
router.post("/upload", upload.array("s_images", 10), uploadSolution);
router.get("/get/:userId/:challengeId", getSolution);
router.get("/get/:userId", getUserSolutions);
router.get("/all_solutions", getAllSolutions);
router.put("/upvote/:id/:userId", addUpvote);
router.put("/downvote/:id/:userId", removeUpvote);
router.put("/addfeedback/:id/:userId", addFeedback);

module.exports = router;
