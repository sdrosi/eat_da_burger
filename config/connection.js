//connect to mysql
var connection;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySql12345!",
    database: "burgers_db",
    port: 3306
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
  