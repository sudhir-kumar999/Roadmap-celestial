import express from 'express';
import fs from "fs"
import { createReadStream , createWriteStream } from 'fs';



const router=express.Router()

router.get("/data",(req,res,next)=>{
    try {
        throw new Error("fake error")
    //     let readStream=fs.createReadStream("/Users/sudhirkumar/Roadmap-celestial/week 2 Day 2 Express js/serverCSV.csv","utf-8")
    //     let data=""
    //     readStream.on("data",(chunk)=>{
    //         // console.log(chunk)
    //         data+=chunk
    // })

    // readStream.on("end",()=>{
    //     res.status(200).json({
    //             chunk:data
    //     })
    //     console.log("data send successfully")
    // })
        
        // res.send("hello")
    } catch (error) {
        // console.log(error)
        next(error)
    }
})

router.post("/post",(req,res,next)=>{
    try {
        // console.log(req.body)
        let writeStream=fs.createWriteStream("./output.csv")
        req.on("data",(chunk)=>{
            writeStream.write(chunk)
        })
        req.on("end",()=>{
            writeStream.end()
            res.send("file sent")
        })
        req.on("error",(err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
})



export default router