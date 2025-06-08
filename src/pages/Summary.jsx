import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Summary({
  foodCalories,
  goalCalories,
  exerciseCalories,
  setGoalCalories,
  setFoodCalories,
  setExerciseCalories,
  onResetAll,
}) {
  const navigate = useNavigate();
  const [inputGoal, setInputGoal] = useState(goalCalories);

  const remaining = goalCalories - foodCalories + exerciseCalories;

  // Sync inputGoal setiap goalCalories berubah
  useEffect(() => {
    setInputGoal(goalCalories);
  }, [goalCalories]);

  const handleSetGoal = () => {
    const newGoal = Number(inputGoal);
    if (!isNaN(newGoal) && newGoal >= 0) {
      setGoalCalories(newGoal);
    } else {
      alert("Masukkan angka yang valid untuk goal kalori");
    }
  };

  const handleReset = () => {
    if (typeof onResetAll === "function") {
      onResetAll();         // Reset state di App.js
      navigate("/home");    // Paksa render ulang Home
    }
  };

  return (
    <div className="content">
      <div className="back-button" onClick={() => navigate(-1)}>
        <div className="back-icon">←</div>
        <div>Kembali</div>
      </div>

      <div className="summary-title">Ringkasan Kalori</div>
      <div className="summary-subtitle">Pantau kebutuhan kalori harianmu</div>

      <div className="card calories-card">
        <div className="calories-message">
          <b>Remaining = Goal - Food + Exercise</b>
        </div>
        <div className="calories-visual">
          <div className="calories-circle">
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
              <div className="goal-dot food"></div>Food: {foodCalories}
            </div>
          </div>
        </div>
      </div>

      <div className="input-group">
        <label>Ubah Goal Kalori Harian:</label>
        <input
          type="number"
          value={inputGoal}
          onChange={(e) => setInputGoal(e.target.value)}
          placeholder="Misal: 2500"
        />
        <button className="calculate-btn" onClick={handleSetGoal}>
          Set Goal Kalori
        </button>
      </div>

      <button className="recalculate-btn" onClick={handleReset}>
        Reset Semua Kalori
      </button>
    </div>
  );
}

export default Summary;
