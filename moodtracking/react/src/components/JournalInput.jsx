import React, { useState, useEffect, useRef } from 'react';
import Sentiment from 'sentiment';

const JournalInput = ({ onAnalyze }) => {
  const [entry, setEntry] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const sentiment = new Sentiment();

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setEntry((prev) => prev + ' ' + transcript);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => setIsListening(false);
    } else {
      alert('Your browser does not support voice input');
    }
  }, []);

  const handleVoiceInput = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = sentiment.analyze(entry);
    const newEntry = {
      text: entry,
      sentiment: result.score,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const existingEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const updatedEntries = [newEntry, ...existingEntries];
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

    onAnalyze(newEntry); // Send to parent if needed
    setEntry('');
  };

  return (
    <form onSubmit={handleSubmit} className="journal-form">
      <textarea
        className="journal-textarea"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write or speak your thoughts..."
        required
      />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button type="submit" className="submit-btn">Analyze Mood</button>
        <button
          type="button"
          className="submit-btn"
          style={{ backgroundColor: isListening ? '#ff7070' : '#50c878' }}
          onClick={handleVoiceInput}
        >
          {isListening ? 'Listening...' : '🎤 Start Voice Input'}
        </button>
      </div>
    </form>
  );
};

export default JournalInput;
