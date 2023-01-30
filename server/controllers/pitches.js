import mongoose from "mongoose";
import Pitch from '../models/pitchModel.js';
import Investor from "../models/inverstorModel.js";


export const createPost = async (req, res) => {
    const pitch = req.body;
    const newPitch = new Pitch({ ...pitch, createdAt: new Date().toISOString() });

    try {
        if(req.body.equity>100){
            res.status(400);
            throw new error("check you equity")
        }
        await newPitch.save();
        res.status(201).json({
            id: newPitch._id,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPitches = async (req, res) => {

    try {
        const postPitches = await Pitch.find().sort({createdAt:-1}).populate('offers');
        res.status(200).json(postPitches);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getOnePitch = async (req, res) => {
    const { id } = req.params;


    try {
        const pitch = await Pitch.findById(id).populate('offers');
        if (!pitch) {
            res.status(400);
            throw new error("Pitch not exits")
        }
        res.status(200).json({
            id:pitch._id,
            entrepreneur:pitch.entrepreneur,
            pitchTitle:pitch.pitchTitle,
            pitchIdea:pitch.pitchIdea,
            askAmount:pitch.askAmount,
            equity:pitch.equity,
            offers:pitch.offers,

        });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const makeOfferByInvestor = async (req, res) => {
    const { id } = req.params;

    try {
        if(req.body.equity>100){
            res.status(400);
            throw new error("check you equity")
        }
    

        const pitch = await Pitch.findById(id);
        if (!pitch) {
            return res.status(404).json({
                message: 'Pitch not found',
            })
        }

        const offer = req.body;
        const newOffer = new Investor({ ...offer, createdAt: new Date().toISOString() });
        await newOffer.save();
        pitch.offers.push(newOffer);
        pitch.save();
        res.status(200).json({
            id: newOffer._id,
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

