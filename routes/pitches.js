import express from 'express';
import {createPost,getPitches,getOnePitch} from '../controllers/pitches.js';


const router=express.Router();

router.post('/',createPost);
router.get('/',getPitches);
router.get('/:id',getOnePitch);


export default router;