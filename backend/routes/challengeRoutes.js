const express = require("express");
const router = express.Router();

const upload = require("../config/upload");
const {
  insertChallenge,
  getChallenges,
} = require("../controllers/challengeController");

router.post("/insert", upload.single("c_img"), insertChallenge);
router.get("/get_challenges", getChallenges);
module.exports = router;
