import express from "express"
import type { Request,Response } from "express"
const app=express()

app.use("/",(req:Request,res:Response)=>{
    res.send("server is working fine")
})

app.listen(3006,()=>{
    console.log("server is running on port 3006")
})

export default app
