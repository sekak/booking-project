import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const createUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
            const userName = await User.find({ username: req.body.username })
            const userEmail = await User.find({ email: req.body.email })
            
            if (userName.length > 0 || userEmail.length > 0) {
                throw new Error("Username or email already in use");
            }
            console.log("here")
        const save_user =await createUser.save()
        res.status(200).json(save_user)
    } catch (err) {
        let error = err.message;
        if(error != "Username or email already in use")   
            error = "something is wrong!"
        res.status(500).json(error)
    }
}



export const login = async (req, res) => {
    try {
        const GetUser = await User.findOne({ username: req.body.username })
        if (!GetUser)
            return res.status(404).json("not found this username")
        if (GetUser.email != req.body.email)
            return res.status(404).json("not found this email")

        if (!(await bcrypt.compare(req.body.password, GetUser.password)))
            return res.status(404).json("not found this password")
        const { isAdmin, password, ...otherThings } = GetUser._doc
        const token = jwt.sign({ id: GetUser._id, isAdmin: GetUser.isAdmin }, process.env.JWTTOKEN);
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(otherThings)
    } catch (err) {
        res.status(500).json("Internal Server Error")
    }
}