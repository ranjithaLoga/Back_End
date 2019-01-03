//var models=require('../Models');
var sequelize = require("../common/mysql");
//var Salon=models.Salon;
var Stylist = require("../Models/stylist");

exports.getAllStylist = (query, cb) => {
  var statement = "SELECT * FROM stylists";

  sequelize.query(statement).then(data => {
    cb(data);
  });
};

exports.modStylist = (query, cb) => {
  var queryObj = {};
  stylistId = query.Stylist_Id;
  queryObj.name = query.name;
  queryObj.location = query.location;
  queryObj.number = query.number;
  Stylist.update(queryObj, {
    where: {
      id: stylistId
    }
  }).then(data => {
    cb(data);
  });
};

exports.addStylist = (query, cb) => {
  var queryObj = {};
  queryObj.name = query.name;
  queryObj.location = query.location;
  queryObj.number = query.number;
  queryObj.experiance = query.experiance;

  Stylist.create(queryObj)
    .then(data => {
      console.log(data.dataValues);
      cb(data.dataValues);
    })
    .catch(err => {
      cb(err);
    });
};

exports.searchStylist = (date, session, service, location, cb) => {
  var search_date = date;
  var search_location = location;
  var search_service = service;
  var search_session = session;

  var statement =
    "SELECT DISTINCT stylists.id, stylists.name, stylists.location, stylists.experiance, stylists.number, charges.service, charges.amount FROM stylists, charges WHERE  stylists.id IN (SELECT DISTINCT stylists.id FROM bookings,stylists WHERE bookings.stylist_id=stylists.id AND bookings.session != :session AND bookings.date != :date) AND charges.stylistId= stylists.id AND charges.service= :service AND stylists.location= :location AND charges.session= :session";
  console.log(statement);
  sequelize
    .query(statement, {
      raw: true,
      replacements: {
        date: search_date,
        session: search_session,
        service: search_service,
        location: search_location
      }
    })
    .then(data => {
      cb(data);
    })
    .catch(err => {
      cb(err);
    });
};

exports.getOne = (id, cb) => {
  var stylistId = id;
  //var service = service;
  console.log("stylistId", stylistId);
  var statement = "SELECT * FROM stylists WHERE stylists.id=:stylist_Id ";

  console.log(statement);
  sequelize
    .query(statement, {
      raw: true,
      replacements: { stylist_Id: stylistId },
      type: sequelize.QueryTypes.SELECT
    })
    .then(data => {
      cb(data);
    })
    .catch(err => {
      cb(err);
    });
};
