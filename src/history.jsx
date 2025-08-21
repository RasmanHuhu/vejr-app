import React from 'react';

function HabitHistory() {
  let history = JSON.parse(localStorage.getItem("habitHistory") || "[]");
  return (
    <div>
      <h2>Historik</h2>
      <ul>
        {history.map((day, idx) => (
          <li key={idx}>
            <strong>{day.date}:</strong>
            {day.habits.map(h => (
              <span key={h.name}> {h.label}: {h.done ? "✔️" : "❌"}</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HabitHistory;
