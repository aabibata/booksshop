var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    name: {
        type:String
    },
    email: {
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    passwd: {
        type:String,
        minlength:6
    },
    adress: {
        type:String
    },
    userType:{
        type:String,
        default:'client'
    }
  });

  module.exports={Users};