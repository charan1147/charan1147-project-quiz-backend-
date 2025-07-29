import express from "express"
const router=express.Router()
import {getQuestions,saveMatch} from "../controller/quizController.js"
import { auth } from "../middleware/auth.js"

router.get("/questions",auth,getQuestions)
router.post("/match",auth,saveMatch)

export default router