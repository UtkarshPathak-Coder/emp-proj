import  express  from "express";
import cors from 'cors'
import { adminRouter } from "./Routes/AdminRoute.js";
const app=express()
app.use(cors({
    origin:["http://localhost:5174","http://localhost:5173","https://66052f42c35dec690b157a37--resplendent-gumption-7e156f.netlify.app"],
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
}))
app.use(express.json())
app.use('/auth',adminRouter)
app.listen(3000,()=>{
    console.log("sever running")
}) 