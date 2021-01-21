const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user')


const db = "mongodb+srv://iiiuuu890:iiiuuu890@cluster0.ybyfp.mongodb.net/admin_panel?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose.connect(db, function (err) {
  if (err) {
    console.log('Connection Error')
  }
  else {
    console.log("Connected to database");
  }
});

router.get('/getAllUsers', function (req, res) {
  console.log('gettin users');
  user.find({})
    .exec(function (err, users) {
      if (err) res.status(400).json({ message: "error gettin users" })
      else {
        res.json(users);
      }
    })
})

router.post('/login', function (req, res) {
  console.log("in login")
  user.find({ email: req.body.email, password: req.body.password })
    .exec(function (err, data) {
      if (err) { console.log("object", err); res.status(400).json({ message: "Network Error during login" }) }
      else {
        if (data == null || data.length == 0) {
          res.status(400).json({ message: "Invalid Username or Password" })
        }
        else {
          res.json(data[0]);
        }
      }
    })
})


router.post('/addUser', function (req, res) {
  console.log('addin user');
  var newUser = new user();
  newUser.userName = req.body.userName;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.userType = req.body.userType;
  newUser.name = req.body.name;

  user.findOne({ email: req.body.email })
    .exec(function (err, data) {
      if (err) res.status(400).json({ message: "error gettin user" })
      else {
        if (data == null) {
          newUser.save(function (err, addedUser) {
            if (err) {
              res.status(400).json({ message: 'Error while adding post' })
            }
            else {
              res.json(addedUser)
            }
          })
        }
        else {
          console.log("err user there")
          res.status(400).json({ message: 'User already Exists' })
        }

      }
    })
})


module.exports = router;
