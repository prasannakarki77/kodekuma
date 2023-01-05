const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const {
  uploadSolution,
  getSolution,
  getUserSolutions,
} = require("../controllers/solutionController");
router.post("/upload", upload.array("s_images", 10), uploadSolution);
router.get("/get/:userId/:challengeId", getSolution);
router.get("/get/:userId", getUserSolutions);
module.exports = router;
