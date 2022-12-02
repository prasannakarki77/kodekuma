const express = require("express");
const router = express.Router();

const upload = require("../config/upload");
const {
  insertChallenge,
  getChallenges,
  getChallenge,
} = require("../controllers/challengeController");

router.post("/insert", upload.single("c_img"), insertChallenge);
router.get("/get_challenges", getChallenges);
router.get("/get_challenge/:id", getChallenge);
module.exports = router;
