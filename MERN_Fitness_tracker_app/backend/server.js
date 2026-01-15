require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const cardioRoutes = require("./routes/cardio");
const supplementsRoutes = require("./routes/supplements");
const exerciseRoutes = require("./routes/exercises");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/cardio", cardioRoutes);
app.use("/api/supplements", supplementsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/exercises", exerciseRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    if (process.env.NODE_ENV !== 'production') {
      app.listen(process.env.PORT || 4000, () => {
        console.log("connected to db & listening on port", process.env.PORT || 4000);
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

// Export the app for Vercel
module.exports = app;
