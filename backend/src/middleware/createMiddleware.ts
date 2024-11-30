import urlSchema from "../zod/zodCheck1";

const createMiddleware = (req : any,res : any,next : any) =>{
    const {success} = urlSchema.safeParse(req.body);
    if(!success){
        return res.json({
            result : false,
            msg : "Invalid Url/Wrong Input"
        });
    }
    next();
}

export default createMiddleware;