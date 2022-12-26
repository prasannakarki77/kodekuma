const express = require("express");
const router = express.Router();

const {
  getProfile,
  rewardBadge,
  rewardStars,
} = require("../controllers/userController");

router.get("/profile/:id", getProfile);
router.put("/reward_badge/:id/:badge", rewardBadge);
router.put("/reward_stars/:id/:stars", rewardStars);

module.exports = router;
