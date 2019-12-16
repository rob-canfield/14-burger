var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    orm.selectAll(function(response) {
      callBack(response);
    });
  },
  create: function(cols, vals, callBack) {
    orm.insertOne("burgers", cols, vals, function(response) {
      callBack(response);
    });
  },
  update: function(objColVals, condition, callBack) {
    orm.updateOne("burgers", objColVals, condition, function(response) {
      callBack(response);
    });
  }
}

module.exports = burger;
