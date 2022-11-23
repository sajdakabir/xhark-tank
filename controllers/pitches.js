import mongoose from "mongoose";
import Pitch from '../models/pitchModel.js';
import Investor from "../models/inverstorModel.js";


export const createPost = async (req, res) => {
    const pitch = req.body;
    const newPitch = new Pitch({ ...pitch, createdAt: new Date().toISOString() });

    try {
        await newPitch.save();
        res.status(201).json({
            _id: newPitch._id,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPitches = async (req, res) => {

    try {
        const postPitches = await Pitch.find();
        res.status(201).json(postPitches);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getOnePitch = async (req, res) => {
    const { id } = req.params;


    try {
        const pitch = await Pitch.findById(id);
        if (!pitch) {
            res.status(400);
            throw new error("Pitch not exits")
        }
        res.status(201).json(pitch);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const makeOfferByInvestor = async (req, res) => {
    const { id } = req.params;

    try {
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
        res.status(201).json({
            _id: newOffer._id,
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

