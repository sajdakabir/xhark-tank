import mongoose from "mongoose";

const investorSchema=new mongoose.Schema({
    investor:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required:true,
    },
    equity:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
    },
    // createdAt:{
    //     type:Date,
    //     default: new Date()
    // },

});

investorSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// _id --->id

// Ensure virtual fields are serialised.
investorSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform:function(doc,ret){
        delete ret._id
    },
});

const Investor=mongoose.model('Investor',investorSchema);
export default Investor;
