const RecentTracks = ({ tracks, likedTracks, toggleLike }) => (
  <div className="card">
    <h3>Recent Tracks</h3>
    <div className="recent-tracks">
      {tracks.map((track, index) => (
        <div key={`${track.id}-${index}`} className="track-item">
          <div>
            <div>{track.title}</div>
            <div className="tags">
              <span className="tag mood-tag">{track.mood}</span>
              <span className="tag genre-tag">{track.genre}</span>
            </div>
          </div>
          <button
            className={`like-btn ${likedTracks.has(track.id) ? 'liked' : ''}`}
            onClick={() => toggleLike(track.id)}
          >
            ❤
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default RecentTracks;
