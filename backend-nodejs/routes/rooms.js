import express from "express"
import { verifyAdmine} from "../utils/verfiyToken.js"
import { createRoom, deleteRoom, getRoom, getRooms ,updateRooms, availabiltyRooms} from "../controlles/room.js"
 
const router = express.Router()

router.post("/:id", verifyAdmine ,createRoom)

router.delete("/:id/:hotelid", verifyAdmine, deleteRoom)

router.get("/:id" ,getRoom)

router.get("/" ,getRooms)

router.put("/:id" ,updateRooms)

router.put("/availablity/:id" , availabiltyRooms)



export default router 