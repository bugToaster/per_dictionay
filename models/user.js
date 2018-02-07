const mongoose = require('mongoose');
let Schema  = mongoose.Schema;
let UserSchema = Schema({
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
        required:true
    },
    updated_date:{
        type:Date
    }
});
var userDatas = module.exports= mongoose.model('user_datas',userSchema);

