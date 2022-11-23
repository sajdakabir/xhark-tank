import express from 'express';
import {createPost,getPitches,getOnePitch,makeOfferByInvestor} from '../controllers/pitches.js';


const router=express.Router();

router.post('/',createPost);
router.get('/',getPitches);
router.get('/:id',getOnePitch);
router.post('/:id/makeOffer',makeOfferByInvestor);


export default router;