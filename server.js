import express from "express"
import cors  from "cors"
import 'dotenv/config'
import songRouter from "./src/routes/songRouter.js";
import connectDB from "./src/config/mongodb.js";
import { connectCloudinary } from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRouter.js";

// app config

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/song",songRouter)
app.use("/api/album",albumRouter)

//initilazing routes
app.get('/', (req,res) => res.send("API WORKING") )

app.listen(port,() => {
    console.log(`server started on ${port}`)
})