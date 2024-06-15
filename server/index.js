import express from "express"
import env from "dotenv"
import mongoose, { createConnection } from "mongoose"
import { MongoClient, ServerApiVersion } from 'mongodb'
import cors from "cors"
import mysql from "mysql"
import { mquery } from "mongoose"
import { connect } from "mongoose"
import model from "./userDb.js"
import PhotoModel from "./photoDB.js"

env.config()

const app = express()
const port = process.env.PORT

app.use(express.static("public"))
app.use(cors())
app.use(express.json())
// database connction

// const db = mysql.createConnection({
//     host : process.env.HOST,
//     user : process.env.USER,
//     password : process.env.PASSWORD,
//     database :process.env.DATABASE
// })
// const schema = mongoose.Schema({
//     name:String,
//     gender:Number,
//     date_of_birth:Date,
//     number:String
// })
// const model = mongoose.model("Photo",schema)



// // connection check

// mongoose.connect()

//getting info from user


// Create a MongoClient with a MongoClientOptions object to set the Stable API version


app.get("/view",(req,res)=>{
    model.find({}).then(user=>res.send(user))
    
})

// loginpage
app.post("/login",async(req,res)=>{
    const {name,date_of_birth,gender,number} = req.body
    const menu = new model({name,date_of_birth,gender,number})
    await menu.save()
    res.send({Status:"inserted"})
    console.log("Recorded")
})
app.post("/upload",async(req,res)=>{
    const {photo} = req.body 
    const menu = new PhotoModel({photo})
    await menu.save()
    res.send({Status:"uploaded"})
    console.log("Photo Uploaded")
})



app.listen(port,()=>{
    console.log("connected",port)
})

