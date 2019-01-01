// Module Dependencies

var express = require("express");
var router = express.Router();
var salon = require("../Controllers/salonController");
var stylist = require("../Controllers/stylistController");
var booking = require("../Controllers/bookingController");
var charge = require("../Controllers/chargeController");
var user = require("../Controllers/usersController");

//search stylist

router.get('/stylist/search/:date/:location/:session/:service', stylist.getOne);

//salon list
router.get("/salon/list", salon.list);

//update salon
router.post("/salon/mod", salon.update);

//add Salon
router.post("/salon/add", salon.add);

//get stylist
router.get("/stylist/list", stylist.list);

// getOnly one stylist
router.get("/stylist/:id", stylist.getOneStylist);

//update all stylists
router.post("./stylist/mod");

//add Stylist
router.post("/stylist/add", stylist.add);

//add booking
router.post("/booking/add", booking.add);

//get stylist booking
router.get("/bookings/stylist/:id", booking.getOneBooking);

//delete Booking
router.delete("/bookings/delete/:id", booking.deleteBooking);

//add charges
router.post("/charge/add", charge.add);

//get charges
router.get("/charge/get/:id/:session", charge.getOne);

//add User 
router.post("/adduser",user.addUser);

//user authentication
router.post("/user/authentication",user.userAuthentication);

module.exports = router;
