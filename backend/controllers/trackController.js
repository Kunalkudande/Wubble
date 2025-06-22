import SAMPLE_TRACKS from '../data/sampleTracks.js';

export const generateTrack = async (req, res) => {
  const { mood, genre } = req.body;

  if (!mood || !genre) {
    return res.status(400).json({ error: 'Mood and genre are required' });
  }

  await new Promise(resolve => setTimeout(resolve, 2000));

  let filteredTracks = SAMPLE_TRACKS.filter(
    track => track.mood === mood && track.genre === genre
  );

  if (filteredTracks.length === 0) {
    filteredTracks = SAMPLE_TRACKS;
  }

  const randomTrack = filteredTracks[Math.floor(Math.random() * filteredTracks.length)];

  const generatedTrack = {
    ...randomTrack,
    id: Date.now().toString(),
    title: `Generated ${mood} ${genre} Track`,
    mood,
    genre
  };

  res.json(generatedTrack);
};

export const getAllTracks = (req, res) => {
  res.json(SAMPLE_TRACKS);
};
