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
            ref:'Investor'

        }
    ],
    // createdAt:{
    //     type:Date,
    //     default: new Date()
    // },

});

// Duplicate the ID field.
pitchSchema.virtual('id').get(function(){
    return this._id.toHexString();
});


// Ensure virtual fields are serialised.
pitchSchema.set('toJSON', {
    virtuals: true,
    virtuals: true,
    versionKey:false,
    transform:function(doc,ret){
        delete ret._id
    },
});
const Pitch=mongoose.model('Pitch',pitchSchema);
export default Pitch;