import mongoose from "mongoose";
import Pitch from '../models/pitchModel.js';


export const createPost=async(req,res)=>{
    const pitch=req.body;
    const newPitch=new Pitch({...pitch,createdAt: new Date().toISOString()});

    try {
        await newPitch.save();
        res.status(201).json({
            message:'Pitch created successfully',
            _id:newPitch._id,
        });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};