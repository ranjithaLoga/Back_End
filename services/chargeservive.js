var sequelize = require("../common/mysql");
var Charge = require("../Models/charge");
var Salon = require("../Models/salon");
var Stylist = require("../Models/stylist");

exports.getStylistCharge = (id, service, cb) => {
  var stylistId = id;
  var service = service;
  console.log("stylistId", stylistId);
  var statement =
    "SELECT session, amount FROM charges, stylist WHERE charges.stylistId=stylist.id AND charges.stylistId=:stylist_id AND AND charges.service=:seviceType ";

  console.log(statement);
  sequelize
    .query(statement, {
      raw: true,
      replacements: { stylist_id: stylistId, serviceType: service }
    })
    .then(data => {
      cb(data);
    })
    .catch(err => {
      cb(err);
    });
};

exports.addSCharge = (query) => {
  return new Promise((resolve, reject) => {
    Charge.create(query)
      .then(data => {
        resolve(data.dataValues);
      })
      .catch(err => {
        reject(err);
      });

  });
};
