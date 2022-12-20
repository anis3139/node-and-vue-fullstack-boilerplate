const { createLogger, format, transports } = require("winston");
const { combine, timestamp, json } = format;

const productionLogger = (fileName) => {
  return createLogger({
    level: "debug",
    format: combine(timestamp(), json()),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: fileName,
        maxSize: 102400,
      }),
    ],
  });
};

module.exports = productionLogger;
