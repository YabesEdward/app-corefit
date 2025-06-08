// src/pages/CalorieCalculator.jsx
import { useState } from "react";
import { FOOD_DATA } from "../data/foodData";

function CalorieCalculator({ onAddFood }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [grams, setGrams] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const results = FOOD_DATA.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
    setSelectedFood(null);
    setResult(null);
  };

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setQuery(food.name); // optional: isi input dengan nama terpilih
    setSearchResults([]);
    setResult(null);
  };

  const handleCalculate = () => {
    if (!selectedFood || !grams || grams <= 0) return;
    const baseGrams = parseFloat(selectedFood.unit.replace(/[^0-9.]/g, ""));
    const kaloriPerGram = selectedFood.calories / baseGrams;
    const totalCalories = Math.round(kaloriPerGram * grams);
    setResult(totalCalories);
    if (onAddFood) {
      onAddFood(totalCalories, selectedFood.name);
    }
  };

  return (
    <div className="content calorie-calculator">
      <div className="back-button" onClick={() => window.history.back()}>
        <div className="back-icon">←</div>
        <div>Kembali</div>
      </div>

      <div className="bmi-title">Calorie Calculator</div>
      <div className="bmi-subtitle">Cari makanan dan hitung kalori berdasarkan gram</div>

      <div className="input-group">
        <label>Cari makanan</label>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Contoh: ikan"
        />
        {searchResults.length > 0 && (
          <ul className="search-results">
            {searchResults.map((item, index) => (
              <li key={index} onClick={() => handleSelectFood(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedFood && (
        <div className="selected-food">
          <p><strong>{selectedFood.name}</strong> ({selectedFood.unit}) = {selectedFood.calories} kkal</p>
        </div>
      )}

      <div className="input-group">
        <label>Berapa gram?</label>
        <input
          type="number"
          value={grams}
          onChange={(e) => setGrams(e.target.value)}
          placeholder="Contoh: 150"
        />
      </div>

      <button className="calculate-btn" onClick={handleCalculate}>Hitung Kalori</button>

      {result && (
        <div className="bmi-calories" style={{ marginTop: "20px" }}>
          Total estimasi kalori: <strong>{result} kkal</strong>
        </div>
      )}
    </div>
  );
}

export default CalorieCalculator;
