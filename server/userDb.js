import mongoose from "mongoose"

const uri = "mongodb+srv://veerakirubanithi:veerakirubanithi@cluster0.uiipbra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
    .then(()=>
        console.log("UserDB MongoDB connected")
)
const schema = mongoose.Schema({
    name:String,
    gender:String,
    date_of_birth:Date,
    number:Number
})
const model = mongoose.model("students",schema)


export default model 