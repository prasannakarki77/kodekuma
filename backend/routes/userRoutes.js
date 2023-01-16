const express = require("express");
const router = express.Router();

const {
  getProfile,
  rewardBadge,
  rewardStars,
  getAllUsers,
} = require("../controllers/userController");

router.get("/profile/:id", getProfile);
router.put("/reward_badge/:id/:badge", rewardBadge);
router.put("/reward_stars/:id/:stars", rewardStars);
router.get("/all_users", getAllUsers);
module.exports = router;
