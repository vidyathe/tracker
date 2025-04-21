
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MoodChart = () => {
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

  const data = {
    labels: entries.map((entry) => new Date(entry.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: 'Sentiment Over Time',
        data: entries.map((entry) => entry.sentiment),
        borderColor: '#50c878',
        backgroundColor: 'rgba(80, 200, 120, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Mood Trend</h2>
      <Line data={data} />
    </div>
  );
};

export default MoodChart;
