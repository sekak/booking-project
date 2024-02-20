import express from "express"
import { deleteUser, getUser, getUsers, updateUser} from "../controlles/user.js"
import { verifyTokenUser , verifyAdmine} from "../utils/verfiyToken.js"
 
const router = express.Router()


router.put("/:id", verifyTokenUser ,updateUser)

router.delete("/:id",verifyTokenUser, deleteUser)

router.get("/:id",verifyTokenUser ,getUser)

router.get("/",verifyAdmine ,getUsers)

export default router