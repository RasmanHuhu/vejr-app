import React, { useState } from 'react';

const initialHabits = [
  { name: "walk", label: "Gået 8km", done: false },
  { name: "minoxidil", label: "Brugt minoxidil", done: false },
  { name: "water", label: "Drukket 1L vand", done: false }
];

function HabitDay() {
  const [habits, setHabits] = useState(initialHabits);

  function toggleHabit(name) {
    setHabits(habits.map(h => 
      h.name === name ? { ...h, done: !h.done } : h
    ));
  }

  function saveHabits() {
    const today = new Date().toISOString().slice(0,10);
    const data = { date: today, habits };
    // Gem til localStorage
    let history = JSON.parse(localStorage.getItem("habitHistory") || "[]");
    history = history.filter(d => d.date !== today); // Fjern evt. eksisterende for i dag
    history.push(data);
    localStorage.setItem("habitHistory", JSON.stringify(history));
    alert("Dagens vaner gemt!");
  }

  return (
    <div>
      <h2>Dagens vane-tracking</h2>
      {habits.map(habit => (
        <div key={habit.name}>
          <label>
            <input
              type="checkbox"
              checked={habit.done}
              onChange={() => toggleHabit(habit.name)}
            />
            {habit.label}
          </label>
        </div>
      ))}
      <button onClick={saveHabits}>Gem dag</button>
    </div>
  );
}
export default HabitDay;