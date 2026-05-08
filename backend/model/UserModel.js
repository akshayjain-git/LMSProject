import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["student","educator"],
        required:true
    },
    photourl:{
        type:String,
        default:""
    },
    enrolledcourses:[{
        type:mongoose.Schema.Types.ObjectId,
        //ref:course
    }]
},{Timestamps:true})

const User = mongoose.model("User", userSchema)

export default(User)
