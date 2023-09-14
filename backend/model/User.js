import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    iss:{
        type:String,
        required: true

    },
    nbf:{
        type:Number,
        required: true
    },
    aud:{
        type:String,
        required: true
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required : true
    },
    email_verified:{
        type:Boolean,
        required:true,
    },
    azp:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true,

    },
    given_name:{
        type:String
    },
    family_name:{
        type:String,
        required: true
    },
    iat:{
        type:String,
        required: true
    },
    exp:{
        type:String,
        required: true,
    },
    jti:{
        type:String,
        required: true
    }
})
const user = mongoose.model('user', userSchema);

export default user;