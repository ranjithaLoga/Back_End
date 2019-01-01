var path = require("path");
var config = {
  debug: true,
  port: 3005,
  mysql: {
    host: "localhost",
    username: "root",
    password: "",
    database: "salone1"
  }
};
console.log("config page");

module.exports = config;
