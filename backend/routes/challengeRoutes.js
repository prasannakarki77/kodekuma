const express = require("express");
const router = express.Router();

const upload = require("../config/upload");
const {
  insertChallenge,
  getChallenges,
  getChallenge,
  startChallenge,
} = require("../controllers/challengeController");

router.post("/insert", upload.single("c_img"), insertChallenge);
router.get("/get_challenges", getChallenges);
router.get("/get_challenge/:id", getChallenge);
router.post("/start_challenge", startChallenge);

module.exports = router;
