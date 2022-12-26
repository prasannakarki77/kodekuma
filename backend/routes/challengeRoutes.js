const express = require("express");
const router = express.Router();

const upload = require("../config/upload");
const {
  insertChallenge,
  getChallenges,
  getChallenge,
  startChallenge,
  checkIfStarted,
  updateChallengeStatus,
} = require("../controllers/challengeController");

router.post("/insert", upload.single("c_img"), insertChallenge);
router.get("/get_challenges", getChallenges);
router.get("/get_challenge/:id", getChallenge);
router.post("/start_challenge", startChallenge);
router.get("/check_if_started/:userId/:challengeId", checkIfStarted);
router.put("/status_update/:userId/:challengeId", updateChallengeStatus);
module.exports = router;
