const Suggestions = ({ score }) => {
    if (score > 0) {
      return <p>😊 You're doing great! Keep journaling your positive vibes!</p>;
    } else if (score < 0) {
      return <p>😔 You seem down. Try some meditation or take a walk. You got this!</p>;
    } else {
      return <p>😐 Neutral mood. How about watching your favorite movie today?</p>;
    }
  };
  
  export default Suggestions;
  