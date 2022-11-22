const asyncHandler = require("express-async-handler");

// @desc Github Login Success
// @route /auth
const loginSuccess = asyncHandler(async (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successs",
      user: req.user,
      //   cookies: req.cookies,
    });
  }
});

// @desc Github Login Failure
// @route /auth
const loginFailed = asyncHandler(async (req, res) => {
  res.status(401).json({
    success: false,
    message: "failedd",
  });
});

// @desc Logout User
// @route /auth
const logout = asyncHandler(async (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

module.exports = {
  loginSuccess,
  loginFailed,
  logout,
};
