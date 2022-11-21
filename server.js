import express from 'express';
import dotenv from 'dotenv';

const app=express();
dotenv.config();



const port=process.env.PORT || 5000;
const start=async()=>{
    try {
        app.listen(port,()=>console.log(`Server is running on post ${port}`));
    } catch (error) {
       console.log(error); 
    }
};

start();

