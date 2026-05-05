// const app=require("../index.ts")
// import app from "../index.js"

import type { NextFunction } from "express"

function middleware(req,res,next:NextFunction){
    console.log(10)
    next()
}
export default middleware