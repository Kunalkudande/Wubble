import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', trackRoutes);

app.listen(PORT, () => {
  console.log(`🎵 Wubble QuickTune API running on http://localhost:${PORT}`);
});
