import {Router} from "express";
const router = Router();
import createMiddleware from "../middleware/createMiddleware";
const shortid = require("shortid");
import ShortnerModel from "../database/db";

router.post("/",createMiddleware,async(req : any,res : any)=>{
    // Here the user provide a original url and acc to that url we create and shortner of that alt.
    const originalUrl = req.body.url;
    const shortUrl = shortid();
    const response = await ShortnerModel.create({
        originalUrl,
        shortUrl 
    });
    if(!response)
    {
        return res.json({
            result : false,
            msg:"Shortner not created. Plz try later...",
        })
    }
    res.json({
        result : true,
        msg : "Shortner Created...",
        shortUrl : `http://localhost:3000/${shortUrl}`
    })
})


export default router;