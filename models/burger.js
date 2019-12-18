var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    orm.selectAll(function(response) {
      callBack(response);
    });
  },
  create: function(vals, callBack) {
    orm.insertOne(vals, function(response) {
      callBack(response);
    });
  },
  update: function(objColVals, callBack) {
    orm.updateOne("burgers", objColVals, function(response) {
      callBack(response);
    });
  }
}

module.exports = burger;