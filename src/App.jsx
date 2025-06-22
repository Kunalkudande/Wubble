import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import GenreSelector from './components/GenreSelector';
import TrackPlayer from './components/TrackPlayer';
import RecentTracks from './components/RecentTracks';
import Toast from './components/Toast';

const API_URL = 'https://wubble-backend.onrender.com/api';

function App() {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [likedTracks, setLikedTracks] = useState(new Set());
  const [recentTracks, setRecentTracks] = useState([]);
  const [toast, setToast] = useState('');

  const audioRef = useRef(null);

  // Load liked tracks from localStorage on first load
  useEffect(() => {
    const savedLikes = localStorage.getItem('likedTracks');
    if (savedLikes) {
      setLikedTracks(new Set(JSON.parse(savedLikes)));
    }
  }, []);

  // Save liked tracks to localStorage when changed
  useEffect(() => {
    localStorage.setItem('likedTracks', JSON.stringify(Array.from(likedTracks)));
  }, [likedTracks]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 3000);
  };

  const generateTrack = async () => {
    if (!selectedMood || !selectedGenre) {
      showToast('Please select both mood and genre');
      return;
    }

    setIsGenerating(true);
    setCurrentTrack(null);
    setIsPlaying(false);

    try {
      const response = await fetch(`${API_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: selectedMood, genre: selectedGenre }),
      });
      const track = await response.json();
      setCurrentTrack(track);
      setRecentTracks([track, ...recentTracks.slice(0, 4)]);
      showToast('🎵 Track generated successfully!');
    } catch (error) {
      showToast('Error generating track');
    } finally {
      setIsGenerating(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => showToast('Error playing track'));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLike = (trackId) => {
    const updatedLikes = new Set(likedTracks);
    if (updatedLikes.has(trackId)) {
      updatedLikes.delete(trackId);
      showToast('Removed from favorites');
    } else {
      updatedLikes.add(trackId);
      showToast('❤️ Added to favorites');
    }
    setLikedTracks(updatedLikes);
  };

  const downloadTrack = () => {
    if (!currentTrack) return;
    const link = document.createElement('a');
    link.href = currentTrack.url;
    link.download = `${currentTrack.title}.mp3`;
    link.click();
    showToast('📥 Download started');
  };

  return (
    <div className="container">
      {toast && <Toast message={toast} />}

      <Header />

      <div className="card">
        <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
        <GenreSelector selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />

        <button
          className="generate-btn"
          onClick={generateTrack}
          disabled={isGenerating || !selectedMood || !selectedGenre}
        >
          {isGenerating ? (
            <div className="loading"><div className="spinner"></div>Generating AI Music...</div>
          ) : (
            '✨ Generate Track'
          )}
        </button>
      </div>

      {currentTrack && (
        <TrackPlayer
          track={currentTrack}
          isPlaying={isPlaying}
          audioRef={audioRef}
          togglePlay={togglePlay}
          toggleLike={toggleLike}
          likedTracks={likedTracks}
          downloadTrack={downloadTrack}
          showToast={showToast}
          setIsPlaying={setIsPlaying}
        />
      )}

      {recentTracks.length > 0 && (
        <RecentTracks
          tracks={recentTracks}
          likedTracks={likedTracks}
          toggleLike={toggleLike}
        />
      )}
    </div>
  );
}

export default App;
