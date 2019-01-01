var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../app");
var should = chai.should();

chai.use(chaiHttp);

describe("Get Stylist", () => {
  it("it should list the suitable stylists", done => {
    chai
      .request(server)
      .get("/stylist/search/:date/:location/:service/:session")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});

describe("Post sylist ", () => {
  it("should add a new Stylist", done => {
    chai
      .request(server)
      .post("/stylist/add")
      .send({
        name: "stylist1",
        location: "seattle",
        number: "0112345",
        experiance: "4"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});

describe("Post salon", () => {
  it("Should add a new stylist", done => {
    chai
      .request(server)
      .post("/salon/add")
      .send({
        name: "salon1",
        reg_No: "101",
        location: "seattle",
        number: "100023"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});

describe("Add booking", () => {
  it("Should add a new booking", done => {
    chai
      .request(server)
      .post("/booking/add")
      .send({
        date: "2018-12-31 00:00:00",
        location: "Seattle",
        salon_id: "1",
        stylist_id: "1",
        session: "morning",
        service: "educator"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});
