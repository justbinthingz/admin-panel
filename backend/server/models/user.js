const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  userType: String,
  name: String
});

module.exports = mongoose.model('user', userSchema)
