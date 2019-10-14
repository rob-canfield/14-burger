// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    orm.all("burgers", function(response) {
      callBack(response);
    });
  },
  update: function(objColVals, condition, callBack) {
    orm.update("burgers", objColVals, condition, function(response) {
      callBack(response);
    });
  }
}
// Export the database functions for the controller (burgersController.js).
module.exports = burger;
