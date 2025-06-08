import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Home({ user, goalCalories = 2000, foodCalories = 0, exerciseCalories = 200 }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [username, setUsername] = useState(user || 'User');
  const dropdownRef = useRef();

  useEffect(() => {
    // Debugging
    console.log("Home component mounted with user prop:", user);
    
    // Redirect if not logged in
    const savedUser = localStorage.getItem('user');
    console.log("Saved user from localStorage:", savedUser);
    
    if (!savedUser && !user) {
      console.log("No user found, redirecting to login");
      navigate('/login');
      return;
    }

    // Update username from props or localStorage
    if (user || savedUser) {
      console.log("Setting username to:", user || savedUser);
      setUsername(user || savedUser);
    }

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [user, navigate]);

  const totalFood = foodCalories;
  const remaining = goalCalories - totalFood + exerciseCalories;
  const isOver = remaining < 0;

  // For debugging
  console.log("Home component rendered with user:", user);
  console.log("Username from state:", username);

  const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem('user');
    localStorage.removeItem('loginTime');
    navigate('/login');
  };

  return (
    <div className="content" id="home-page">
      <div className="header" style={{ position: 'relative' }}>
        <div
          className="profile-pic"
          onClick={() => setShowMenu(!showMenu)}
          style={{
            fontSize: '24px',
            width: '36px',
            height: '36px',
            backgroundColor: '#eee',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginBottom: '5px',
          }}
        >
          👤
        </div>
        <div>
          <div className="greeting">Hello,</div>
          <div className="user-name">{username}</div>
        </div>

        {/* Dropdown Logout */}
        {showMenu && (
          <div
            ref={dropdownRef}
            style={{
              position: 'absolute',
              top: '60px',
              left: '0',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              borderRadius: '8px',
              zIndex: 1000,
              padding: '10px',
              width: '140px',
            }}
          >
            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                padding: '8px',
                border: 'none',
                backgroundColor: '#f44336',
                color: 'white',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      <div className="card calories-card">
        <div className="calories-message" style={{ color: isOver ? "#D32F2F" : "black" }}>
          {isOver
            ? "⚠️ Anda telah mengonsumsi terlalu banyak kalori hari ini!"
            : "You didn't consume enough calories today."}
        </div>
        <div className="calories-subtitle">
          Remaining = Goal - Food + Exercise
        </div>

        <div className="calories-visual">
          <div
            className="calories-circle"
            style={{
              backgroundColor: isOver ? "#FFCDD2" : "yellow",
              color: isOver ? "#D32F2F" : "black"
            }}
          >
            <div className="calories-number">{remaining}</div>
            <div className="calories-label">Remaining</div>
          </div>

          <div className="calories-breakdown">
            <div className="breakdown-item">
              <div className="goal-dot goal"></div>Goal: {goalCalories}
            </div>
            <div className="breakdown-item">
              <div className="goal-dot exercise"></div>Exercise: {exerciseCalories}
            </div>
            <div className="breakdown-item">
              <div className="goal-dot food"></div>Food: {totalFood}
            </div>
          </div>
        </div>

        <button className="atur-kalori-btn" onClick={() => navigate("/summary")}>
          Atur Kalori <span>→</span>
        </button>
      </div>

      {/* Navigasi ke fitur lainnya */}
      {/* Calorie Calculator */}
      <div className="card calculator-card" onClick={() => navigate("/calorie")}>
        <div className="calculator-icon" style={{ backgroundColor: "#A0E7E5" }}>🍎</div> {/* ← Ganti dengan apel */}
        <div className="calculator-text">
          <div className="calculator-title">Calorie Calculator</div>
          <div className="calculator-subtitle">Hitung kebutuhan kalori harian Anda dengan informasi pribadi</div>
        </div>
        <div className="arrow-icon">›</div>
      </div>

      {/* BMI Calculator */}
      <div className="card calculator-card" onClick={() => navigate("/bmi")}>
        <div className="calculator-icon" style={{ backgroundColor: "#FF9AAA" }}>≡</div> {/* ← Ganti dengan icon sebelumnya */}
        <div className="calculator-text">
          <div className="calculator-title">BMI Calculator</div>
          <div className="calculator-subtitle">Menghitung BMI dari data anda</div>
        </div>
        <div className="arrow-icon">›</div>
      </div>


      <div className="card calculator-card" onClick={() => navigate("/activity")}>
        <div className="calculator-icon" style={{ backgroundColor: "#B5EAD7" }}>🏃</div>
        <div className="calculator-text">
          <div className="calculator-title">Daily Activity</div>
          <div className="calculator-subtitle">Lacak aktivitas fisik dan pembakaran kalori Anda hari ini</div>
        </div>
        <div className="arrow-icon">›</div>
      </div>
    </div>
  );
}

export default Home;