const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const developmentLogger = (fileName) => {
  const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

  return createLogger({
    level: "debug",
    format: combine(
      format.colorize(),
      label({ label: "right meow!" }),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),

    transports: [
      new transports.Console(),
      new transports.File({
        filename: fileName,
        maxSize: 102400,
      }),
    ],
  });
};

module.exports = developmentLogger;
