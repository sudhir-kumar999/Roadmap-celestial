import express  from "express"
import type {Request,Response,NextFunction} from "express"
import middleware from "./middleware/middleware.js"
// import router from "./router/csvRouter.ts"
// import errorMiddleware from "./middleware/errorMiddleware.ts"
const app=express()
app.use(express.json())


app.get("/",middleware,(req:Request,res:Response)=>{
    res.send("hello from server")
})

// app.use("/csv",router)

app.use((req,res)=>{
    // res.status(404).send("wrong path please enter the right url")

    res.status(404).sendFile("/Users/sudhirkumar/Roadmap-celestial/week 2 Day 2 Express js/src/index.html")
})
// app.use(errorMiddleware)
app.listen(5000,()=>{
    console.log("server is running")
})

export default app