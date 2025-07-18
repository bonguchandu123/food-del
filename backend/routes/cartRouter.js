import express, { Router } from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";


const cartRouter = express.Router();


cartRouter.post("/add",authMiddleware, addToCart)
cartRouter.post("/removes",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)


export default cartRouter;