import express from 'express';
import {createPost,getPitches} from '../controllers/pitches.js';


const router=express.Router();

router.post('/',createPost);
router.get('/',getPitches);


export default router;