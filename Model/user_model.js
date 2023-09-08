const mongoose = require('mongoose')

const user_schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    }
  },
  {
    timestamps: true,
  }
)

const user_model = mongoose.model('User', user_schema)
module.exports=user_model;
