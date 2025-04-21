import React, { useState } from 'react';
import JournalInput from './components/JournalInput';
import JournalHistory from './components/JournalHistory';
import MoodChart from './components/MoodChart';
import MotivationMessage from './components/MotivationMessage';

const App = () => {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="app-container">
      <h1>🧠 Mood Journal</h1>
      <MotivationMessage />
      <JournalInput onAnalyze={() => window.location.reload()} />
      <MoodChart />

   
      <button
        onClick={toggleHistory}
        className="submit-btn"
        style={{ backgroundColor: '#00ffe5', marginBottom: '20px' }}
      >
        📜 {showHistory ? 'Hide' : 'Show'} Past Entries
      </button>

      
      {showHistory && <JournalHistory />}
      
     
      <button
        onClick={() => {
          if (window.confirm("Clear all journal entries? This can't be undone.")) {
            localStorage.removeItem('journalEntries');
            window.location.reload();
          }
        }}
        className="submit-btn"
        style={{ backgroundColor: '#ff4d4d' }}
      >
        🗑️ Clear All Entries
      </button>
    </div>
  );
};

export default App;
