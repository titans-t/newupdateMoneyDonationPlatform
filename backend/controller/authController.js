
const bcrypt = require('bcrypt')
const authModel = require('../models/authModel')
const { generatingCookie } = require('../utils/generatingCookie')
const authAdmin = require('../models/authAdmin')
const { generatingCookieAdmin } = require('../utils/generatingCookieAdmin')

const userRegister = async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body
        if(!username || !password || !confirmPassword) return res.status(400).json({error: "all fields are required"})
        if (password != confirmPassword) return res.status(400).json({ message: "ensure confirmpassword is same" })
        const existingUser = await authModel.findOne({ username: username })
        if (!existingUser) {
            const bcryptPassword = await bcrypt.hash(password, 8)
            const user = await authModel.create({
                username: username,
                password: bcryptPassword,
                confirmPassword: bcryptPassword
            })
            await generatingCookie(user._id, res)
            return res.status(200).json(user)
        }
        res.status(400).json({ error: "this username already exists" })
    } catch (error) {
        res.status(400).json({ error: "error comes from auth router" })
        console.log("comes from auth router", error.message);
    }
}

const userLogin =async (req, res) => {
 try {
    const { username, password } = req.body
    if(!username || !password) return res.status(400).json({error: "all fields are required"})
    const registerdUser = await authModel.findOne({username})
    if(!registerdUser) return res.status(400).json({error: "username is incorrect"})
    const isSame = await bcrypt.compare(password, registerdUser.password)
    if(isSame){
        await generatingCookie(registerdUser, res)
        return res.status(200).json(registerdUser)
    }
    return res.status(400).json({error: "make sure password is correct "})

 } catch (error) {
    return res.status(400).json({error: "error came from login route"})
    console.log("error came from login route", error.message);
    
 }
}



const adminRegister = async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body
        if (password != confirmPassword) return res.status(400).json({ message: "ensure confirmpassword is same" })
        const existingUser = await authAdmin.findOne({ username: username })
        if (!existingUser) {
            const bcryptPassword = await bcrypt.hash(password, 8)
            const user = await authAdmin.create({
                username: username,
                password: bcryptPassword,
                confirmPassword: bcryptPassword
            })

            await generatingCookieAdmin(user._id, res)
            return res.status(200).json(user)
        }
        res.status(400).json({ error: "this username already exists" })
    } catch (error) {
        res.status(400).json({ error: "error comes from auth router" })
        console.log("comes from auth router", error.message);
    }
}

const adminLogin =async (req, res) => {
    try {
       const { username, password } = req.body
       if(!username || !password) return res.status(400).json({error: "all fields are required"})
       const registerdUser = await authAdmin.findOne({username})
       if(!registerdUser) return res.status(400).json({error: "username is incorrect"})
       const isSame = await bcrypt.compare(password, registerdUser.password)
       if(isSame){
           await generatingCookieAdmin(registerdUser, res)
           return res.status(200).json(registerdUser)
       }
       res.status(400).json({error: "make sure password is correct "})
   
    } catch (error) {
       return res.status(400).json({error: "error came from login route"})
       console.log("error came from login route", error.message);
       
    }
   }


const logout =(req, res)=>{
    try {
        res.cookie("auth", "", { maxAge: 0})
        res.status(200).json("logout successfully")
    } catch (error) {
        console.log(error.message, "error while logout");
        res.status(400).json({error: "error while logout"})
    }
}
const adminLogout =(req, res)=>{
    try {
        res.cookie("adminauth", "", { maxAge: 0})
        res.status(200).json("logout successfully")
    } catch (error) {
        console.log(error.message, "error while logout");
        res.status(400).json({error: "error while logout"})
    }
}

const getAllUsers = async(req, res)=>{
    try {
        const allUsers = await authModel.find()
        if(allUsers.length <= 0) return res.status(200).json([])
        res.status(200).json(allUsers)
    } catch (error) {
        console.log(error.message, "error comes from getAllUser for Admin");
        res.status(400).json({error: error.message})
    }
}
const deleteSingleUser = async(req, res)=>{
    try {
        const {id:userId} = req.params
        const deleteUser = await authModel.findOne({_id: userId})
        const deletedUser = await authModel.deleteOne({_id: userId})
        if(!deleteUser) return res.status(400).json({error: "no user found with this _id"})
        res.status(200).json(deleteUser)
    } catch (error) {
        console.log(error.message, "error comes from deleting single user for Admin");
        res.status(400).json({error: error.message})
    }
}
module.exports = { userRegister, userLogin, adminRegister, adminLogin, logout, adminLogout, getAllUsers, deleteSingleUser}