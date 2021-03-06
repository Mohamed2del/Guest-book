const mogoose = require('mongoose')

 const UserSchema = new mogoose.Schema({
     name :{
         type : String,
         required : true
     },
     email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    role:{
        type: String,
        default: 'basic',
        enum:['admin','basic']
    },
    date :{
        type : Date,
        default : Date.now
    },
 })

 const User = mogoose.model('User',UserSchema)

 module.exports = User;