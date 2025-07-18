import foodModel from "../models/foodModel.js";
import fs from "fs"



const addFood = async (req,res) => {
    const image_filename = `${req.file.filename}`
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try{
        await food.save();
        res.json({succses:true, measage:"food added"})
    }catch(err){
        console.log(err);
        res.json({succses:false, measage:"err"})

    }

}

//list food

const listFood = async (req, res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }catch(err){
        console.log(err);
        res.json({success:false, message:"error"})
    }

}

const removeFood = async (req,res) => {
    
try{
    const food = await foodModel.findById(req.body.id);
   
    fs.unlink(`uploads\${food.image}`, () => {})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({succses:true, message:"food removed"})
}catch(err){
    console.log(err);
    res.json({succses:false, message:"Error"})
}

}
export {addFood,listFood,removeFood}   