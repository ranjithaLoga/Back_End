var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");

var statement =
  "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`, `createdAt`, `updatedAt`) VALUES (NULL, 'Stylist1', 'Seattle', '0778899', '4', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`, `createdAt`, `updatedAt`) VALUES (NULL, 'Stylist2', 'New York', '0888345', '2', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`, `createdAt`, `updatedAt`) VALUES (NULL, 'Stylist3', 'Times Square', '088121', '3', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`, `createdAt`, `updatedAt`) VALUES (NULL, 'Stylist4', 'Virginia', '088121', '7', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});
