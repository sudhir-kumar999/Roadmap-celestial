import type { ErrorRequestHandler} from 'express';

const errorMiddleware:ErrorRequestHandler=(error,req,res,next)=>{
    const status=error.status || 500
    const message=error.message || "something wrong in backend"
    res.status(500).json({
        success:false,
        message:message
    })
}

export default errorMiddleware;