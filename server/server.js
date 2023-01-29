import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './db/connect.js';
import pitchRoutes from './routes/pitches.js';

const app=express();
app.use(express.json());
dotenv.config();



connectDB();

app.use('/pitches',pitchRoutes);


const port=process.env.PORT || 5000;
const start=async()=>{
    try {
        app.listen(port,()=>console.log(`Server is running on post ${port}`.yellow.bold));
    } catch (error) {
       console.log(error); 
    }
};

start();

