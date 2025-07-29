import express from "express"
const router=express.Router()
import {login,logout,profile,register} from "../controller/userController.js"
import { auth } from "../middleware/auth.js"

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
router.get("/getme",auth,profile)

export default router