var User = require("../services/userservice");
var async = require("async");

exports.userAuthentication = (req,res,next) => {
    User.userAuthenticaion(req.body, (ret) => {
        res.json({      
          status: ret,
        });
  });
}

exports.addUser = (req, res, next) => {
  User.addUsertodb(req.body, ret => {
    if (ret)
      res.json({
        status: "User Added Successfully",
      });
  });
}
