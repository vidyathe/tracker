import React from 'react';

const JournalHistory = () => {
 
  const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

  return (
    <div className="journal-history">
      {journalEntries.length === 0 ? (
        <p>No entries available.</p>
      ) : (
        journalEntries.map((entry, index) => (
          <div key={index} className="journal-entry">
            <h3>Entry #{index + 1}</h3>
            <p>{entry.text}</p>
            <p><strong>Sentiment:</strong> {entry.sentiment}</p>
            <p><strong>Date:</strong> {entry.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default JournalHistory;
