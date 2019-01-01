var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");

var Stylist = sequelize.define("stylist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  },

  location: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  experiance: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database & table stylist created!");
});
var statement =
  "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`, `createdAt`, `updatedAt`) VALUES (NULL, `Stylist1`, `Seattle`, `0778899`, `4`, `2018-12-31 00:00:00`, `2018-12-31 00:00:00`)";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`, `createdAt`, `updatedAt`) VALUES (NULL, `Stylist2`, `New York`, `0888345`, `2`, `2018-12-31 00:00:00`, `2018-12-31 00:00:00`)";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`, `createdAt`, `updatedAt`) VALUES (NULL, `Stylist3`, `Times Square`, `088121`, `3`, `2018-12-31 00:00:00`, `2018-12-31 00:00:00`)";
sequelize.query(statement).then(data => {
  cb(data);
});

console.log("stylist page");

module.exports = Stylist;
