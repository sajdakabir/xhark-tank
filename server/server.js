import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from "cors";
import connectDB from './db/connect.js';
import pitchRoutes from './routes/pitches.js';

const app=express();
app.use(express.json());
dotenv.config();

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

connectDB();

app.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Hello from XharkTank!'
    })
  });
  
app.use('/pitches',pitchRoutes);


const port=process.env.PORT || 8081;
const start=async()=>{
    try {
        app.listen(port,()=>console.log(`Server is running on post ${port}`.yellow.bold));
    } catch (error) {
       console.log(error); 
    }
};

start();

