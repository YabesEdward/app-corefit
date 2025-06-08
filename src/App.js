import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Workout from './pages/Workout';
import BMI from './pages/BMI';
import DailyActivity from './pages/DailyActivity';
import Chatbot from './pages/Chatbot';
import CalorieCalculator from './pages/CalorieCalculator';
import Summary from './pages/Summary';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import Register from './pages/Register';
import './style.css';

function App() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const savedUser = localStorage.getItem('user');
      const token = localStorage.getItem('token');

      console.log('🔍 Checking savedUser:', savedUser, 'token:', token);

      if (savedUser && token) {
        setUser(savedUser);
      } else {
        setUser(null);
      }

      setReady(true);
    };

    checkLogin();

    window.addEventListener('storage', checkLogin);
    return () => {
      window.removeEventListener('storage', checkLogin);
    };
  }, []);

  // ✅ Handler login sinkron: menyimpan user dan token
  const handleLoginSuccess = (username, token) => {
    localStorage.setItem('user', username);
    localStorage.setItem('token', token);

    // 🔁 Paksa re-check auth state
    setUser(null);  // reset dulu supaya trigger ulang efek
    setTimeout(() => {
      const savedUser = localStorage.getItem('user');
      const savedToken = localStorage.getItem('token');
      if (savedUser && savedToken) {
        console.log("🔁 Rechecking after login - user:", savedUser);
        setUser(savedUser);
      }
    }, 50);
  };


  const [foodCalories, setFoodCalories] = useState(0);
  const [goalCalories, setGoalCalories] = useState(2000);
  const [exerciseCalories, setExerciseCalories] = useState(200);

  const handleAddFood = (amount) => setFoodCalories((prev) => prev + amount);
  const handleAddExercise = (amount) => setExerciseCalories((prev) => prev + amount);
  const handleResetAll = () => {
    setFoodCalories(0);
    setExerciseCalories(0);
    setGoalCalories(0);
  };

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />

          <Route
            path="/login"
            element={
              user ? <Navigate to="/home" /> : <Login onLoginSuccess={handleLoginSuccess} />
            }
          />

          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              user ? (
                <Home
                  user={user}
                  foodCalories={foodCalories}
                  goalCalories={goalCalories}
                  exerciseCalories={exerciseCalories}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="/recipe" element={user ? <Recipe /> : <Navigate to="/login" />} />
          <Route path="/workout" element={user ? <Workout user={user} /> : <Navigate to="/login" />} />
          <Route path="/bmi" element={user ? <BMI /> : <Navigate to="/login" />} />
          <Route path="/activity" element={user ? <DailyActivity onAddExercise={handleAddExercise} /> : <Navigate to="/login" />} />
          <Route path="/chatbot" element={user ? <Chatbot /> : <Navigate to="/login" />} />
          <Route path="/calorie" element={user ? <CalorieCalculator onAddFood={handleAddFood} /> : <Navigate to="/login" />} />

          <Route
            path="/summary"
            element={
              user ? (
                <Summary
                  foodCalories={foodCalories}
                  goalCalories={goalCalories}
                  exerciseCalories={exerciseCalories}
                  setGoalCalories={setGoalCalories}
                  setExerciseCalories={setExerciseCalories}
                  setFoodCalories={setFoodCalories}
                  onResetAll={handleResetAll}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>

        {user && <Navigation />}
      </div>
    </Router>
  );
}

export default App;
