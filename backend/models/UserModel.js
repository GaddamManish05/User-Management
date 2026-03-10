import { Schema,model } from "mongoose";
// create USer Schema with Validation
const userSchema = new Schema({
    name : {
        type : String,
        required : [true,"User name is required"]
    },
    email : {
        type : String,
        required : [true,"Email is required"],
        unique : [true,"Email is Already Exists"]
    },
    dob : {
        type :Date,
        required : [true, "Date of Birth required"]
    },
    mobileNumber : {
        type :Number,
    },
    status : {
        type : Boolean,
        default : true
    }
},{
    strict : "throw",
    timestamps : true,
    versionKey : false
})
// Create USer Model for User schema

export const UserModel = model('user',userSchema);