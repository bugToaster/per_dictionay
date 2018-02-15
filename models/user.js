const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
var UserSchema = Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fist_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    date_of_birth:{
        type:Date,
        required:true
    },

    created_date:{
        type:Date,
    },
    updated_date:{
        type:Date
    }
});
var userDatas = module.exports= mongoose.model('User',UserSchema);

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});