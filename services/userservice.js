var sequelize = require("../common/mysql");
//var Salon=models.Salon;
var User = require("../Models/users");

exports.userAuthenticaion = (query,cb) =>{
    var name = query.name;
    var pass = query.password;

    findOneUser(name,pass)
        .then(user => {
            if(!user) return cb(false);
            return cb(true);
        })
        .catch((err) => {
            console.log(err);
        });



}

findOneUser = function(name , password) {
    return new Promise((resolve, reject) => {
        var statement = `SELECT * FROM users WHERE name = "${name}" AND password = "${password}"`;
        sequelize.query(statement, { type: sequelize.QueryTypes.SELECT }).then(data => {
            if(data.length === 0) {
                return resolve(null);
            }else{
                console.log(data[0].name)
                resolve(data[0].name);
            }
        });
    });
}

exports.addUsertodb = (query,cb) => {
    var queryObj = {};
    queryObj.name = query.name;
    queryObj.password = query.password;
    User.create(queryObj)
        .then(dat => {
            console.log(data.dataValues);
            cb(data.dataValues);
    })
    .catch(err => {
      cb(err);
    });
}