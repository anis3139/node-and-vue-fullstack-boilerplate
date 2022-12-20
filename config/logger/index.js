const developmentLogger = require("./developmentLogger");
const productionLogger = require("./productionLogger");

let logger = null;

let mydate = new Date();
let dateString =
  mydate.getFullYear() + "-" + mydate.getMonth() + "-" + mydate.getDate();

const fileName = `${process.env.PWD}/storage/logs/${dateString}.log`;

if (process.env.NODE_ENV === "development") {
  logger = developmentLogger(fileName);
}

if (process.env.NODE_ENV === "production") {
  logger = productionLogger(fileName);
}

module.exports = logger;
