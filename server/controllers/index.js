var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('get messages')

      res.send(models.messages.get)

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //models.messages.post()

      console.log('post messages')
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //models.users.get()
      res.send(models.users.get)
      console.log('from users get')
    },
    post: function (req, res) {
      //models.users.post()

      console.log('from users post')
    }
  }
};

