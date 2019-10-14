var connection = require('./command');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(object) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in object) {
    var value = object[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(object, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }d

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {

    create: function(columns, values, callBack) {
      var queryString = "INSERT INTO burgers (" + columns.toString() + ") VALUES (" + printQuestionMarks(values.length) + ")";
  
      connection.query(queryString, values, function(err, result) {
        if (err) {
          throw err;
        }
  
        callBack(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(objColVals, condition, callBack) {
      var queryString = "UPDATE burger SET " + objToSql(objColVals) + " WHERE " + condition;

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callBack(result);
      });
    }
  };

  module.exports = orm;