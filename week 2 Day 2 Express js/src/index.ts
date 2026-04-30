import express  from "express"
import type {Request,Response} from "express"
import router from "./router/csvRouter.ts"
import errorMiddleware from "./middleware/errorMiddleware.ts"
const app=express()
app.use(express.json())


app.get("/",(req:Request,res:Response)=>{
    res.send("hello from server")
})

app.use("/csv",router)

app.use(errorMiddleware)
app.listen(5000,()=>{
    console.log("server is running")
})

export default app