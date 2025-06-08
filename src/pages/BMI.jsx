import { useState } from "react";

function BMI() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [advice, setAdvice] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState("50%");
  const [tdee, setTdee] = useState(null);

  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) {
      alert("Mohon masukkan tinggi dan berat badan yang valid.");
      return;
    }

    const heightM = h / 100;
    const bmiVal = w / (heightM * heightM);
    const rounded = bmiVal.toFixed(1);
    let cat = "", msg = "", pos = "";

    if (bmiVal < 18.5) {
      cat = "Kekurangan Berat Badan";
      msg = "Anda mungkin perlu menambah berat badan dengan pola makan sehat.";
      pos = "15%";
    } else if (bmiVal < 25) {
      cat = "Berat Badan Normal";
      msg = "Berat badan Anda ideal. Pertahankan gaya hidup sehat!";
      pos = "35%";
    } else if (bmiVal < 30) {
      cat = "Kelebihan Berat Badan";
      msg = "Pertimbangkan menurunkan berat badan secara sehat.";
      pos = "60%";
    } else {
      cat = "Obesitas";
      msg = "Konsultasikan dengan profesional kesehatan.";
      pos = "85%";
    }

    // Estimasi Kalori Harian (TDEE)
    const age = 25; // default
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * age + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * age - 161;
    }
    const estimatedTDEE = Math.round(bmr * 1.55); // aktivitas sedang
    setTdee(estimatedTDEE);

    setBmi(rounded);
    setCategory(cat);
    setAdvice(msg);
    setIndicatorPosition(pos);
    setShowResult(true);
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setGender("male");
    setShowResult(false);
  };

  return (
    <div className="content" id="bmi-calculator-page">
      <div className="back-button" onClick={() => window.history.back()}>
        <div className="back-icon">←</div>
        <div>Kembali</div>
      </div>

      <div className="bmi-title">BMI Calculator</div>
      <div className="bmi-subtitle">Hitung dan ketahui Body Mass Index Anda</div>

      {!showResult && (
        <div className="bmi-form">
          <div className="gender-group">
            <label>Jenis Kelamin</label>
            <div className="gender-options">
              {["male", "female"].map((g) => (
                <div
                  key={g}
                  className={`gender-option ${gender === g ? "active" : ""}`}
                  onClick={() => setGender(g)}
                >
                  <div className="gender-icon">{g === "male" ? "👨" : "👩"}</div>
                  <div>{g === "male" ? "Pria" : "Wanita"}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label>Tinggi Badan (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Contoh: 170"
            />
          </div>

          <div className="input-group">
            <label>Berat Badan (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Contoh: 65"
            />
          </div>

          <button className="calculate-btn" onClick={handleCalculate}>
            Hitung BMI
          </button>
        </div>
      )}

      {showResult && (
        <div className="bmi-result">
          <div className="result-card">
            <div className="result-header">BMI Anda</div>
            <div className="bmi-value">{bmi}</div>
            <div className="bmi-category">{category}</div>

            <div className="bmi-scale">
              <div className="scale-bar">
                <div className="indicator" style={{ left: indicatorPosition }}></div>
              </div>
              <div className="scale-labels">
                <div>Kurang</div>
                <div>Normal</div>
                <div>Berlebih</div>
                <div>Obesitas</div>
              </div>
            </div>

            <div className="bmi-advice">{advice}</div>

            {tdee && (
              <div className="bmi-calories">
                <p><strong>Estimasi Kalori Harian:</strong></p>
                <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                  <li>🔥 <strong>Cutting:</strong> {Math.round(tdee * 0.8)} kkal</li>
                  <li>🍽️ <strong>Maintain:</strong> {tdee} kkal</li>
                  <li>🍗 <strong>Bulking:</strong> {Math.round(tdee * 1.2)} kkal</li>
                </ul>
              </div>
            )}
          </div>

          <button className="recalculate-btn" onClick={handleReset}>
            Hitung Ulang
          </button>
        </div>
      )}
    </div>
  );
}

export default BMI;
