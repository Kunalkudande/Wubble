const GenreSelector = ({ selectedGenre, setSelectedGenre }) => (
  <div className="selector-group">
    <h3>Select Genre</h3>
    <div className="button-grid">
      {['Pop', 'Lo-fi', 'Cinematic', 'EDM'].map((genre) => (
        <button
          key={genre}
          className={selectedGenre === genre ? 'selected' : ''}
          onClick={() => setSelectedGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  </div>
);

export default GenreSelector;
