const passport = require("passport");
const dotenv = require("dotenv").config();
const GitHubStrategy = require("passport-github2").Strategy;
const GITHUB_CLIENT_ID = "57703b1ffe74a8ad5118";
const GITHUB_CLIENT_SECRET = "b4d19ae6b1054c8f82be0a7c5b03411519a3ec0f";
const User = require("../models/userModel");

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // check if user already exists in our db
      User.findOne({ githubId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // already have the user
          console.log("User exists in database.");
        } else {
          // if not, create new user in our db
          new User({
            username: profile.username,
            githubId: profile.id,
            profileImg: profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              console.log("User added to database.");
            });
        }
      });

      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
