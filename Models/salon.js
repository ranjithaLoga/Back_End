var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");

var Salon = sequelize.define("salon", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reg_No: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  location: {
    type: Sequelize.STRING,
    allowNull: false
  },

  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
sequelize.sync({ force: false }).then(() => {
  console.log("Database & table salon created!");
});

var statement =
  "INSERT INTO `salons` (`id`, `name`, `reg_No`, `location`, `number`, `createdAt`, `updatedAt`) VALUES (NULL, 'Salon1', '10223', 'Seattle', '0112233', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `salons` (`id`, `name`, `reg_No`, `location`, `number`, `createdAt`, `updatedAt`) VALUES (NULL, 'Salon2', '75332', 'New York', '01555663', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

var statement =
  "INSERT INTO `salons` (`id`, `name`, `reg_No`, `location`, `number`, `createdAt`, `updatedAt`) VALUES (NULL, 'Salon3', '87623', 'New York', '01554463', '2018-12-31 00:00:00', '2018-12-31 00:00:00')";
sequelize.query(statement).then(data => {
  cb(data);
});

console.log("salon page");

module.exports = Salon;
