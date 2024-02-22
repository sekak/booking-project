import express from "express"
import { createHotel, deleteHotel, getCountCity, getCountType, getHotel, getHotels, getHotelsRooms, updateHotel } from "../controlles/hotel.js"
import { verifyAdmine } from "../utils/verfiyToken.js"

const router = express.Router()


router.post("/", verifyAdmine ,createHotel)

router.put("/:id",verifyAdmine, updateHotel)

router.delete("/:id",verifyAdmine,  deleteHotel)

router.get("/find/:id" ,getHotel)

router.get("/find", getHotels)

router.get("/countByCity", getCountCity)

router.get("/countByType", getCountType)

router.get("/rooms/:id", getHotelsRooms)

export default router