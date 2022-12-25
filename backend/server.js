const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cookieSession = require("cookie-session");
const passportSetup = require("./auth/passport");
const passport = require("passport");
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const app = express();

// Routes
const authRoute = require("./routes/authRoutes");
const resourceRoute = require("./routes/resourceRoutes");
const challengeRoute = require("./routes/challengeRoutes");
const userRoute = require("./routes/userRoutes");
const solutionRoute = require("./routes/solutionRoutes");
// Connect to database
connectDB();

app.use(
  cookieSession({
    name: "session",
    keys: ["kodekuma"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);
app.use("/resource", resourceRoute);
app.use("/challenge", challengeRoute);
app.use("/user", userRoute);
app.use("/solution", solutionRoute);

app.use(express.static(__dirname + "/uploads"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
