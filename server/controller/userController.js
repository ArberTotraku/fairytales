import User from "../models/usersModel.js";

export const getAllUsers = async (req,res,next) => {
    try {
        const users = await User.find()
        res.json( {msg:'success',users} )
    } catch (error) {
        next(error)
    }
}

export const getUserByEmail = async (req,res,next)=> {
    const {email} = req.params;
    try {
        const users = await User.findOne( {email} )
        res.json( {msg:'success',users} )
    } catch (error) {
        next(error)
    }
}

export const addUser = async (req,res,next)=> {
    const user= req.body
    try {
        const newUser = await User.create(user)
        res.json( {msg:'success',newUser} )
    } catch (err) {
        next(err)
    }
}