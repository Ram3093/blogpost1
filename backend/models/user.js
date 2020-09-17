const mongoose=require('mongoose');

const userSchmea=new mongoose.Schema({

    firstname:{
        type:String,
        required:[true,'first name is required'],
        maxlength:32
    },
    lastname:{
        type:String,
        required:[true,'last name is required'],
        maxlength:32
    },
    email:{
        type:String,
        required:[true,'email is required'],
        maxlength:32,
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
        minlength:[6,'minimum password is 6 character']
    }

})

const blogUser=mongoose.model('blogUser',userSchmea)

module.exports=blogUser