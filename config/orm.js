var connection = require('./connection');

var orm = {

  selectAll: function (callBack) {
    var queryString = "SELECT * FROM bugrers;";

    connection.query(queryString, values, function (err, result) {
      if (err) { throw err; }

      callBack(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  insertOne: function (userInput, callBack) {
    var queryString = "INSERT INTO burger (burger_name) VALUES (" + userInput + ")";

    connection.query(queryString, function (err, result) {
      if (err) { throw err; }

      callBack(result);
    });
  },

  updateOne: function (callBack) {
    var queryString = "UPDATE burger SET devoured WHERE id =" 

    connection.query(queryString, function (err, result) {
      if (err) { throw err; }

      callBack(result);
    });
  }
};

  module.exports = orm;