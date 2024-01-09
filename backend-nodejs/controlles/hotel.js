import Hotel from "../models/Hotel.js";


export const createHotel = async (req,res ) => {
    const hotel = new Hotel(req.body)
    try {
        const resolvedPromise = await hotel.save();
         res.status(200).json(resolvedPromise)
    } catch (err) {
        res.status(500).json(err)
    }
};

export const updateHotel = async (req,res) => {
    try {
        const updateHotels = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body, $new: true });
        res.status(200).json(updateHotels)
     } catch (err) {
        res.status(500).json(err)
     }
};

export const deleteHotel = async (req,res) => {
    try {
        const deleteHotels = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel has been delete")
     } catch (err) {
        res.status(500).json(err)
     }
}

export const getHotel = async (req,res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
     } catch (err) {
        res.status(500).json(err)
     }
}


export const getHotels = async (req,res) => {
    const {min, max, featured} = req.query
    try {
        const hotels = await Hotel.find({cheapestPrice: {$gt: min || 1, $lt: max || 999}, featured}).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getCountCity = async (req,res) => {
    const cities = req.query.city.split(",")
    console.log(cities)
    try {
        const hotels = await Promise.all(cities.map((item)=>{
            return Hotel.countDocuments({city: item})
        })) 
        res.status(200).json(hotels)
     } catch (err) {
        res.status(500).json(err)
     }
}
 
// /getCountType

export const getCountType = async (req,res) => {
    try {
        const countTypeHotels = await Hotel.countDocuments({type:"hotels"})
        const countTypeApartments = await Hotel.countDocuments({type:"apartments"})
        const countTypeCabins = await Hotel.countDocuments({type:"cabins"})
        const countTypeVillas = await Hotel.countDocuments({type:"villas"})
        const countTypeResorts = await Hotel.countDocuments({type:"resorts"})
        res.status(200).json([
            {type: "hotels", count: countTypeHotels},
            {type: "cabins", count: countTypeCabins},
            {type: "villas", count: countTypeVillas},
            {type: "resorts", count: countTypeResorts},
            {type: "apartments", count: countTypeApartments},
        ])
     } catch (err) {
        res.status(500).json(err)
     }
}