const MoodSelector = ({ selectedMood, setSelectedMood }) => (
  <div className="selector-group">
    <h3>Select Mood</h3>
    <div className="button-grid">
      {['Happy', 'Sad', 'Energetic', 'Chill'].map((mood) => (
        <button
          key={mood}
          className={selectedMood === mood ? 'selected' : ''}
          onClick={() => setSelectedMood(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
  </div>
);

export default MoodSelector;
