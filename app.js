const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(helmet());
app.use(cors({ origin: "*", methods: "GET" }));

app.use("/api/characters", require("./routes/characterRoutes"));
app.use("/api/monsters", require("./routes/monsterRoutes"));
app.use("/api/games", require("./routes/gameRoutes"));

app.use((req, res, next) => {
  res.status(404).json({
    message: "No route found :(",
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
