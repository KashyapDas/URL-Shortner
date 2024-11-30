import {Router} from "express";
import ShortnerModel from "../database/db";
const router = Router();

router.get("/:shortnerId",async(req: any,res: any)=>{
    // Here the route was hit by the user in the browser url and when this route was hit the route will redirect the user to the corresponding url attached to the shortner url
    const shortUrl = req.params.shortnerId;
    const response = await ShortnerModel.findOne({
        shortUrl 
    });
    if(!response){
        return res.json({
            result : false,
        });
    }
    // res.redirect()
    // console.log(response);
    res.redirect(response.originalUrl);
})


export default router;