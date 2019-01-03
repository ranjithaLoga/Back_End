var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");
var Stylist = require("./stylist");

var Charge = sequelize.define("charge", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  stylistId: {
    type: Sequelize.INTEGER,
    references: {
      model: Stylist,
      key: "id"
    }
  },

  service: {
    type: Sequelize.STRING(45),
    allowNull: false
  },

  session: {
    type: Sequelize.STRING(45),
    allowNull: false
  },

  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database & table charges created!");
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'1', 'educator', 'morning', '1000', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'1', 'educator', 'afternoon', '1500', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'1', 'educator', 'evening', '2000', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'1', 'stylist', 'morning', '900', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'1', 'stylist', 'afternoon', '1000', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'1', 'stylist', 'evening', '1500', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'2', 'educator', 'morning', '1000', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'2', 'educator', 'afternoon', '500', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `charges` (`id`,`stylistId`, `service`, `session`, `amount`, `createdAt`, `updatedAt`) VALUES (NULL,'2', 'educator', 'evening', '2500', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

console.log("charge page");

module.exports = Charge;
