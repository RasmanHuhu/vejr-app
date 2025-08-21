import React, { useState } from 'react';
import HabitDay from './day.jsx';
import HabitStats from './stats.jsx';
import HabitHistory from './history.jsx';
import './style.css';

function App() {
  const [view, setView] = useState('day');

  return (
    <div>
      <nav>
        <button onClick={() => setView('day')}>Dagens vaner</button>
        <button onClick={() => setView('history')}>Historik</button>
        <button onClick={() => setView('stats')}>Statistik</button>
      </nav>
      {view === 'day' && <HabitDay />}
      {view === 'history' && <HabitHistory />}
      {view === 'stats' && <HabitStats />}
    </div>
  );
}

export default App;
