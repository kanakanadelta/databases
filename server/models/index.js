var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function (callback) {

      var queryStr = "select messages.id, messages.text, messages.roomname from messages \
                      left outer join users on (messages.userid = users.id) \
                      order by messages.id desc"
      db.query(queryStr, function(err, result) {
        callback(results); //--> gets grabbed by the controller
      })
      // a function which produces all the messages
    }, 
    post: function (params, callback) {
      // a function which can be used to insert a message into the database
    var queryStr = "insert into messages (text, userid, roomname) \
                values (?, (select id from users where username = ? limit 1), ?)";
        db.query(queryStr, params, (err, results) => {
          callback(results)
        })
        console.log('in models', 'messages post');
   //--> gets grabbed by the controller
      }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.con.query("SELECT * FROM users", (err, results) => {
        callback(results);
           //--> gets grabbed by the controller
      })
      console.log('in models', 'users get');
    },
    post: function (params, callback) {
      var queryStr = "insert into users(username) values (?)";
      db.query(queryStr, params, (err, results) => {
        callback(results);
      })
    }
  }
};

