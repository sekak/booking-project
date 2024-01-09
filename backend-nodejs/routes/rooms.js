import express from "express"
import { verifyTokenUser , verifyAdmine} from "../utils/verfiyToken.js"
import { createRoom, deleteRoom, getRoom, getRooms } from "../controlles/room.js"
 
const router = express.Router()

router.post("/:id", verifyAdmine ,createRoom)

router.delete("/:id/:hotelid", verifyAdmine, deleteRoom)

router.get("/:id",verifyTokenUser ,getRoom)

router.get("/",verifyTokenUser ,getRooms)

export default router 