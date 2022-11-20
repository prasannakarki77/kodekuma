const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  loginSuccess,
  loginFailed,
  logout,
} = require("../controllers/authController");

router.get("/login/success", loginSuccess);

router.get("/login/failed", loginFailed);

router.get("/logout", logout);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
