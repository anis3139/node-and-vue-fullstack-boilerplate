const express = require("express");
const path = require("path");
require("dotenv").config();
const config = require("./config");
const logger = require("./config/logger");
const cors = require("./middlewares/common/cors");

const api = require("./router/api");

const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers before the routes are defined
app.use(cors);

app.use("/api", api);

// common error handler
app.use(errorHandler);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(__dirname + "/client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
} else {
  app.use(express.static(__dirname + "/public"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}

// 404 not found handler
app.use(notFoundHandler);

app.listen(config.port, () => {
  logger.info(`app listening to port ${config.port}`);
});
