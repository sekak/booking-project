import User from "../models/User.js";

export const updateUser = async (req,res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body, $new: true });
        const {password, ...otherThings} = updateUser._doc
        console.log({...otherThings})
        res.status(200).json({...otherThings})
     } catch (err) {
        res.status(500).json(err)
     }
};

export const deleteUser = async (req,res) => {
    try {
        const deleteUsers = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel has been delete")
     } catch (err) {
        res.status(500).json(err)
     }
}

export const getUser = async (req,res) => {
    try {
        const GetUsers = await User.findById(req.params.id)
        res.status(200).json(GetUsers)
     } catch (err) {
        res.status(500).json(err)
     }
}


export const getUsers = async (req,res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
     } catch (err) {
        res.status(500).json(err)
     }
}