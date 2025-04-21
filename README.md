# Mood Journal

Mood Journal is a web application designed to help users track their emotional well-being through journaling. It analyzes sentiment from journal entries and visualizes mood trends over time.

## 📝 Description

This interactive journaling tool helps you track your emotional well-being by analyzing the sentiment of your entries and visualizing your mood trends over time. Write or speak your thoughts, and let the app help you understand your emotional patterns.

## 🔍 Screenshots

![Mood Journal Main Interface](screenshots/main-interface.png)
*Main interface with journal input and mood chart*

![Journal History View](screenshots/journal-history.png)
*View of past journal entries with sentiment analysis*

## 🚀 Live Demo

Experience Mood Journal in action: [Live Demo](https://mood-journal-demo.vercel.app)

## ✨ Features

- **Journal Entry Creation**: Write or dictate your thoughts using speech recognition
- **Sentiment Analysis**: Automatically analyzes the emotional tone of your entries
- **Mood Visualization**: Displays your sentiment trends over time with an interactive chart
- **Motivational Messages**: Provides contextual encouragement based on your current mood
- **Journal History**: View and manage all your past entries
- **Local Storage**: Securely stores all your journal entries in your browser

## 🛠️ Technology Stack

- React.js for the user interface
- Sentiment.js for natural language processing and mood analysis
- Chart.js for data visualization
- Web Speech API for voice input capabilities
- LocalStorage for data persistence

## 📂 Project Structure

```
mood-journal/
├── src/
│   ├── components/
│   │   ├── JournalInput.js      # Journal entry creation with voice input
│   │   ├── JournalHistory.js    # Display past journal entries
│   │   ├── MoodChart.js         # Visualize mood trends
│   │   ├── MotivationMessage.js # Contextual encouragement
│   │   └── Suggestions.js       # Mood-based activity suggestions
│   ├── App.js                   # Main application component
│   └── index.js                 # Entry point
├── public/
│   ├── index.html               # HTML template
│   └── favicon.ico              # App icon
└── package.json                 # Dependencies and scripts
```

## 🚀 Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mood-journal.git
   cd mood-journal
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Add the required dependencies:
   ```
   npm install sentiment react-chartjs-2 chart.js
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 📱 Usage Guide

1. **Creating Journal Entries**:
   - Type your thoughts in the text area
   - Alternatively, click the voice input button and speak
   - Click "Analyze Mood" to save and analyze your entry

2. **Viewing Your Mood Chart**:
   - The line chart automatically updates with each new entry
   - Hover over data points to see exact sentiment scores

3. **Accessing Past Entries**:
   - Click "Show Past Entries" to view your journal history
   - Click "Hide Past Entries" to collapse the history view

4. **Managing Your Data**:
   - Use the "Clear All Entries" button to remove all saved entries
   - Confirm when prompted to prevent accidental deletion

## 🌐 Browser Compatibility

The voice input feature requires a modern browser that supports the Web Speech API:
- Chrome (recommended)
- Edge
- Safari
- Firefox

## 🔒 Privacy Note

All your journal entries are stored locally in your browser using LocalStorage. Your data never leaves your device and is not sent to any server.

## 🔮 Future Enhancements

- User accounts and cloud synchronization
- Enhanced sentiment analysis with emotion categories
- Customizable themes and visualization options
- Exportable reports and insights
- Reminder system for consistent journaling




