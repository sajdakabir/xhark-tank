import mongoose from "mongoose";

const pitchSchema = mongoose.Schema({
    entrepreneur: {
        type: String,
        required: true,
    },
    pitchTitle: {
        type: String,
        required: true,
    },
    pitchIdea: {
        type: String,
        required: true,
    },
    askAmount: {
        type: Number,
        require: true,
    },
    equity: {
        type: Number,
        require: true,
    },
    offers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            investor:{
                type: String,
                required: true,
            },
            amount:{
                type: Number,
            },
            equity:{
                type:Number,
            },
            comment:{
                type:String,
            }

        }
    ],
    createdAt:{
        type:Date,
        default: new Date()
    },

});
const Pitch=mongoose.model('Pitch',pitchSchema);
export default Pitch;