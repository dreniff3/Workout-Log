// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { GiLog } from 'react-icons/gi';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Import Components, styles, media
import Navigation from './components/Nav';
import './App.css';

// Define the function that renders the content in routes using State
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

        <header>
          <div id="header">
            <h1><span id="header-1">Workout</span> <GiLog id="logo" /> <span id="header-2">Log</span></h1>
            <p>A place to record your exercises.</p>
          </div>
          <div id="nav">
            <Navigation />
          </div>
        </header>

        <main>
          <Route path="/" exact>
            <HomePage setExercise={setExercise} />
          </Route>

          <Route>
            <AddExercisePage />
          </Route>

          <Route>
            <EditExercisePage exercise={exercise} />
          </Route>
        </main>

        <footer>
          <p><cite>&copy; 2022 Don Reniff</cite></p>
        </footer>

      </Router>
    </>
  );
}

export default App;
