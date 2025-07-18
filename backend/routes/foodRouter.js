import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router(); //
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb) => {
        return cb(null,`${Date.now()}${file.orginalname}`)
    }
})
const upload = multer({storage:storage})




foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/lists", listFood)
foodRouter.post("/removes",removeFood)

export default foodRouter;