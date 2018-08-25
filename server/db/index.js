var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) {
        console.log('error at db, ', err);
    }
    console.log("Connected!");
  });

module.exports.con = con;