const TrackPlayer = ({
  track,
  isPlaying,
  audioRef,
  togglePlay,
  toggleLike,
  likedTracks,
  downloadTrack,
  setIsPlaying
}) => (
  <div className="card">
    <div className="player">
      <div className="track-title">{track.title}</div>
      <div className="tags">
        <span className="tag mood-tag">{track.mood}</span>
        <span className="tag genre-tag">{track.genre}</span>
      </div>
      <div>{track.duration}</div>

      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? '⏸' : '▶'}
      </button>

      <div className="action-buttons">
        <button
          className={`like-btn ${likedTracks.has(track.id) ? 'liked' : ''}`}
          onClick={() => toggleLike(track.id)}
        >
          ❤ {likedTracks.has(track.id) ? 'Liked' : 'Like'}
        </button>
        <button onClick={downloadTrack}>📥 Download</button>
      </div>

      <audio
        ref={audioRef}
        src={track.url}
        onEnded={() => setIsPlaying(false)}
        onError={() => console.error('Audio error')}
      />
    </div>
  </div>
);

export default TrackPlayer;
