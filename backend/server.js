import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";


const app =express()
const port = 4000;

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)

app.use("/api/order",orderRouter)
app.get("/", (req,res) => {
    res.send("api working")
})
app.listen(port,() => {
    console.log('server started at localhost:${port}')
})
//mongodb+srv://aravindj1350:<db_password>@cluster0.wyyii.mongodb.net/?