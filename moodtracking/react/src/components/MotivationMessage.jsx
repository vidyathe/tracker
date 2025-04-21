
import React from 'react';

const MotivationMessage = () => {
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  if (entries.length === 0) return null;

  const lastSentiment = entries[0].sentiment;

  if (lastSentiment < -2) {
    return <p className="motivation">😔 You're going through a tough time. Try a short walk, journaling, or meditation. You matter. 💙</p>;
  } else if (lastSentiment < 1) {
    return <p className="motivation">🌤 Keep going! You’re doing okay. Why not listen to your favorite music or call a friend? ☎️</p>;
  } else {
    return <p className="motivation">🌟 You're on a roll! Stay positive and share your energy with others. ✨</p>;
  }
};

export default MotivationMessage;
