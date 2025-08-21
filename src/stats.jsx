import React from 'react';

function HabitStats() {
  let history = JSON.parse(localStorage.getItem("habitHistory") || "[]");
  let stats = {};

  history.forEach(day => {
    day.habits.forEach(habit => {
      if (!stats[habit.label]) stats[habit.label] = 0;
      if (habit.done) stats[habit.label] += 1;
    });
  });

  return (
    <div>
      <h2>Statistik</h2>
      <ul>
        {Object.keys(stats).map(label => (
          <li key={label}>
            {label}: {stats[label]} gange
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HabitStats;
