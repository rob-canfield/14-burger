var connection = require('./connection');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {

  selectAll: function (callBack) {
    var queryString = "SELECT * FROM burgers;";

    connection.query(queryString, function (err, result) {
      if (err) { throw err; }

      callBack(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  insertOne: function (userInput, callBack) {
    var queryString = "INSERT INTO burger (burger_name) VALUES (" + userInput + ")";

    connection.query(queryString, values, function (err, result) {
      if (err) { throw err; }

      callBack(result);
    });
  },

  updateOne: function (userInput, callBack) {
    var queryString = "UPDATE burger SET devoured=true WHERE id =" + userInput + ";"

    connection.query(queryString, function (err, result) {
      if (err) { throw err; }

      callBack(result);
    });
  }
};

  module.exports = orm;