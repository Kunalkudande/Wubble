import express from 'express';
import { generateTrack, getAllTracks } from '../controllers/trackController.js';

const router = express.Router();

router.post('/generate', generateTrack);
router.get('/tracks', getAllTracks);

export default router;
