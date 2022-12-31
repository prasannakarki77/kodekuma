const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const {
  uploadSolution,
  getSolution,
} = require("../controllers/solutionController");
router.post("/upload", upload.array("s_images", 10), uploadSolution);
router.get("/get/:userId/:challengeId", getSolution);
module.exports = router;
