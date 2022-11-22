import mongoose from "mongoose";
import Pitch from '../models/pitchModel.js';


export const createPost=async(req,res)=>{
    const pitch=req.body;
    const newPitch=new Pitch({...pitch,createdAt: new Date().toISOString()});

    try {
        await newPitch.save();
        res.status(201).json({
            _id:newPitch._id,
        });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

export const getPitches=async(req,res)=>{

    try {
        const postPitches=await Pitch.find();
        res.status(201).json(postPitches);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};


