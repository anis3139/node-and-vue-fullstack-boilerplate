const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  let errorMessage = process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  res.json(errorMessage);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
