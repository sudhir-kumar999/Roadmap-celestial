import express from "express"
import { deleteData, getData, postData, updateData } from "../controller/register.ts"
const router=express.Router()

router.get("/getData",getData)
router.post("/postData",postData)
router.put("/updateData/:email",updateData)
router.delete("/deleteData/:email",deleteData)

export default router