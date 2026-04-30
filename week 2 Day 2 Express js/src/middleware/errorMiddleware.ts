import type { Request,Response,NextFunction } from "express"
import type { ErrorRequestHandler } from "express"

const errorMiddleware:ErrorRequestHandler=(err,req,res,next)=>{

    const status=err.status || 500
    const message=err.message || "Error from Backend"
    return res.status(status).json({
        message
    })

}

export default errorMiddleware