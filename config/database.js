import mongoose from "mongoose";

mongoose
  .connect(process.env['DATABASE_URL'])
  .then(() => {
    console.log("Database connection established");
  })
  .catch(() => {
    console.log("Database connection error");
  });