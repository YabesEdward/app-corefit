import { useState } from "react";

function DailyActivity({ onAddExercise }) {
  const [activity, setActivity] = useState("");
  const [intensity, setIntensity] = useState("medium");
  const [duration, setDuration] = useState(30);
  const [customDuration, setCustomDuration] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [calories, setCalories] = useState(0);

  const metValues = {
    gym: { low: 3.5, medium: 5.0, high: 6.0 },
    running: { low: 6.0, medium: 9.8, high: 11.8 },
    swimming: { low: 5.8, medium: 8.3, high: 10.0 },
    cycling: { low: 4.0, medium: 6.8, high: 10.5 },
    badminton: { low: 4.5, medium: 7.0, high: 9.0 },
  };

  const translate = {
    gym: "Gym",
    running: "Lari",
    swimming: "Renang",
    cycling: "Bersepeda",
    badminton: "Badminton",
    low: "Rendah",
    medium: "Sedang",
    high: "Tinggi",
  };

  const calculateCalories = () => {
    if (!activity) {
      alert("Pilih aktivitas terlebih dahulu");
      return;
    }
    const met = metValues[activity][intensity];
    const durasi = customDuration ? parseInt(customDuration) : duration;
    const weight = 70;
    const durasiJam = durasi / 60;
    const cal = Math.round(met * weight * durasiJam);
    setCalories(cal);
    setShowResult(true);
    if (onAddExercise) onAddExercise(cal);
  };

  const generateAdvice = (cal) => {
    if (cal < 100) return `${cal} kalori ≈ 1 buah apel`;
    if (cal < 200) return `${cal} kalori ≈ 1 gelas susu coklat`;
    if (cal < 300) return `${cal} kalori ≈ 1 potong roti sandwich`;
    if (cal < 400) return `${cal} kalori ≈ 1 piring mie goreng`;
    if (cal < 500) return `${cal} kalori ≈ 1 porsi nasi dengan lauk`;
    return `${cal} kalori ≈ 1 porsi lengkap nasi, lauk, sayur`;
  };

  const resetForm = () => {
    setActivity("");
    setIntensity("medium");
    setDuration(30);
    setCustomDuration("");
    setShowResult(false);
    setCalories(0);
  };

  return (
    <div className="content" id="daily-activity-page">
      <div className="back-button" onClick={() => window.history.back()}>
        <div className="back-icon">←</div>
        <div>Kembali</div>
      </div>

      <div className="page-title">Daily Activity</div>
      <div className="page-subtitle">Hitung kalori berdasarkan aktivitas hari ini</div>

      {!showResult && (
        <>
          <div className="section-title">Pilih Aktivitas</div>
          <div className="activity-icons">
            {Object.keys(metValues).map((act) => (
              <div
                key={act}
                className={`activity-icon ${activity === act ? "active" : ""}`}
                onClick={() => setActivity(act)}
              >
                <div className="icon">
                  {act === "gym" && "🏋️‍♂️"}
                  {act === "running" && "🏃"}
                  {act === "swimming" && "🏊"}
                  {act === "cycling" && "🚴"}
                  {act === "badminton" && "🏸"}
                </div>
                <div className="label">{translate[act]}</div>
              </div>
            ))}
          </div>

          <div className="section-title">Tingkat Intensitas</div>
          <div className="intensity-selector">
            {["low", "medium", "high"].map((lvl) => (
              <div
                key={lvl}
                className={`intensity-level ${intensity === lvl ? "active" : ""}`}
                onClick={() => setIntensity(lvl)}
              >
                {translate[lvl]}
              </div>
            ))}
          </div>

          <div className="section-title">Durasi (menit)</div>
          <div className="duration-selector">
            {[15, 30, 45, 60].map((d) => (
              <div
                key={d}
                className={`duration-option ${duration === d && !customDuration ? "active" : ""}`}
                onClick={() => {
                  setDuration(d);
                  setCustomDuration("");
                }}
              >
                {d} menit
              </div>
            ))}
            <div className={`duration-option ${customDuration ? "active" : ""}`}>
              <input
                type="number"
                min="1"
                placeholder="Custom"
                value={customDuration}
                onChange={(e) => setCustomDuration(e.target.value)}
              />
            </div>
          </div>

          <button className="calculate-btn" onClick={calculateCalories}>Hitung Kalori</button>
        </>
      )}

      {showResult && (
        <div className="activity-result-card">
          <div className="result-header">Kalori yang Dibakar</div>
          <div className="calories-value">{calories}<span className="unit"> kal</span></div>
          <div className="activity-summary">
            <div className="summary-item">
              <div className="summary-label">Aktivitas:</div>
              <div>{translate[activity]}</div>
            </div>
            <div className="summary-item">
              <div className="summary-label">Intensitas:</div>
              <div>{translate[intensity]}</div>
            </div>
            <div className="summary-item">
              <div className="summary-label">Durasi:</div>
              <div>{customDuration || duration} menit</div>
            </div>
          </div>
          <div className="activity-advice">{generateAdvice(calories)}</div>

          <div className="result-actions">
            <button className="primary-btn" onClick={resetForm}>Coba Aktivitas Lain</button>
            <button className="secondary-btn" onClick={() => window.history.back()}>Kembali ke Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DailyActivity;