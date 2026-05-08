import User from "../model/UserModel.js"
import validator from "validator"
import bcrypt from "bcryptjs"
import GenToken from "../config/token.js"

export const signup = async (req,res) => {
    try{
        const { name , email , password , role } = req.body
        let existuser = await User.findOne({ email })
        if(existuser){
            return res.status(400).json({message:"user already exists"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"invalid email"})
        }
        if(password.length < 8){
            return res.status(400).json({message:"enter a strong password"})
        }
        let hashpassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password:hashpassword,
            role
        })
        let token = await GenToken(user._Id)
        res.cookie("token", token, {
            httpOnly:true,
            secure:false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })
        return res.status(201).json(user)
    } catch(error){
        return res.status(500).json({message:error.message})
    }

}
export const login = async (req,res) => {
    try{
        const {email,password}= req.body
        let user = await User.findOne({email})
        if (!user){
            return res.status(404).json({message:"user not found"})
        }
        let isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"})
        }
        let token = await GenToken(user._Id)
        res.cookie("token", token, {
            httpOnly:true,
            secure:false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const logout = async (req,res) => {
    try{
        await res.clearCookie("token")
        return res.status(200).json({message:"logout succesfully"})
    } catch (error){
        return res.status(500).json({message: error.message})
    }
}