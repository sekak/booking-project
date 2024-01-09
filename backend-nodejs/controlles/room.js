import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js'


export const createRoom = async (req, res) => {
    try {
        try{
            await Hotel.findById(req.params.id)
            const room =  new Room(req.body);
            const save_room = await room.save();
            await Hotel.findByIdAndUpdate(req.params.id, { $push: { rooms: save_room._id } }, { new: true })
            res.status(200).json(save_room);
        }
        catch(err)
        {
            res.status(500).json("Not found this hotel")
        }
    } catch (err) {
        res.status(500).json(err)
    }
}


export const deleteRoom = async (req, res) => {

    try {
        await Room.findByIdAndDelete(req.params.id)
        await Hotel.findByIdAndUpdate(req.params.hotelid, {$pull : {rooms: req.params.id}})
        console.log(Hotel.find())
        res.status(200).json("room already delete");
    } catch (err) {
        res.status(500).json("internal server error")
    }
}


export const getRoom = async (req, res) => {

    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json("internal server error")
    }
}

export const getRooms = async (req, res) => {

    try {
        const rooms = await Room.find()
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json("internal server error")
    }
}