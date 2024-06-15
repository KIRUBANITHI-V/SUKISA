import { Binary } from "mongodb";
import mongoose from "mongoose";

const url = "mongodb+srv://veerakirubanithi:veerakirubanithi@cluster0.uiipbra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
    .then(()=> {
        console.log("PhotoDB MongoDB connected")
    }
    )

const schema = new mongoose.Schema({
    photo:String
})

const PhotoModel = mongoose.model("photo",schema)

export default PhotoModel