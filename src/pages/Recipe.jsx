import { useState } from "react";
import quinoaSalad from "../gambar/5.jpg"; 
import NasiMerahWTahu from "../gambar/1.jpg"; 
import GreenSmoothie from "../gambar/3.jpg"; 
import SupAyam from "../gambar/8.jpg"; 
import TumisAyamB from "../gambar/9.jpg"; 
import ikannasime from "../gambar/4.jpg"; 
import dagingsake from "../gambar/2.jpg"; 
import omelet from "../gambar/6.jpg"; 
import piscang from "../gambar/7.jpg"; 

const initialRecipes = [
  {
    image: quinoaSalad,
    title: "Salad Alpukat & Quinoa",
    time: "15 min",
    calories: "320 kcal",
    bahan: [
      "100 g quinoa (mentah)",
      "1 buah alpukat, potong dadu",
      "10–12 tomat ceri, belah dua",
      "1/4 bawang merah, iris tipis",
      "Segenggam daun bayam atau selada",
      "1 sdm minyak zaitun",
      "1 sdm air lemon",
      "Garam & lada secukupnya",
      "Sedikit biji wijen atau kacang panggang (opsional)"
    ],
    resep: [
      "Masak quinoa sesuai petunjuk di kemasan, lalu tiriskan.",
      "Campur quinoa dengan semua bahan dalam mangkuk besar.",
      "Tuang minyak zaitun dan air lemon, aduk rata.",
      "Taburi biji wijen atau kacang panggang jika suka.",
      "Salad siap disajikan!"
    ]
  },
  {
  image: NasiMerahWTahu,
  title: "Nasi Merah dengan Tumis Tahu & Brokoli",
  time: "20 min",
  calories: "400 kcal",
  bahan: [
    "100 g nasi merah matang",
    "100 g tahu, potong kotak kecil",
    "1 cangkir brokoli, potong kecil",
    "1 siung bawang putih, cincang",
    "1 sdm minyak zaitun",
    "2 sdm kecap asin rendah sodium",
    "Sedikit merica"
  ],
  resep: [
    "Panaskan minyak zaitun di wajan.",
    "Tumis bawang putih hingga harum, masukkan tahu dan goreng hingga kecokelatan.",
    "Tambahkan brokoli, aduk sebentar.",
    "Tuang kecap asin dan merica, masak hingga brokoli layu.",
    "Sajikan bersama nasi merah."
  ]
}
,
{
  image: GreenSmoothie,
  title: "Smoothie Hijau Sehat",
  time: "5 min",
  calories: "250 kcal",
  bahan: [
    "1 genggam bayam segar",
    "1 buah pisang",
    "1/2 buah alpukat",
    "200 ml air kelapa",
    "1 sdt madu (opsional)"
  ],
  resep: [
    "Masukkan semua bahan ke dalam blender.",
    "Blender hingga halus dan creamy.",
    "Tuang ke gelas dan sajikan segera."
  ]
}

,
  {
    image: SupAyam,
    title: "Sup Ayam & Sayuran",
    time: "30 min",
    calories: "280 kcal",
    bahan: [
      "150 g dada ayam, potong kecil",
      "1 wortel, potong dadu",
      "1 kentang kecil, potong dadu",
      "Segenggam buncis, potong pendek",
      "1 liter air",
      "1 siung bawang putih, cincang",
      "Garam dan merica secukupnya"
    ],
    resep: [
      "Rebus ayam dalam air hingga mendidih.",
      "Masukkan wortel, kentang, dan buncis.",
      "Tambahkan bawang putih cincang, garam, dan merica.",
      "Masak hingga sayuran empuk.",
      "Sup siap disajikan selagi hangat."
    ]
  },
  {
  image: TumisAyamB,
  title: "Tumis Ayam Brokoli",
  time: "20 min",
  calories: "280 kcal",
  bahan: [
    "150 g dada ayam, potong dadu",
    "1 cangkir brokoli, potong kecil",
    "1 siung bawang putih, cincang",
    "1 sdm minyak zaitun",
    "1 sdm kecap asin rendah sodium",
    "Garam dan lada secukupnya"
  ],
  resep: [
    "Panaskan minyak zaitun di wajan.",
    "Tumis bawang putih hingga harum.",
    "Masukkan ayam, masak hingga matang.",
    "Tambahkan brokoli, aduk rata.",
    "Tuang kecap asin, garam, dan lada.",
    "Masak hingga brokoli layu.",
    "Sajikan hangat."
  ]
}
,
 {
  image: ikannasime,
  title: "Ikan Panggang Nasi Merah",
  time: "25 min",
  calories: "350 kcal",
  bahan: [
    "100 g nasi merah matang",
    "150 g fillet ikan",
    "1 sdm minyak zaitun",
    "1 sdt air lemon",
    "Garam dan lada secukupnya",
    "Sayuran kukus sebagai pelengkap"
  ],
  resep: [
    "Lumuri ikan dengan bumbu dan air lemon.",
    "Panggang di oven atau pan hingga matang.",
    "Sajikan dengan nasi merah dan sayuran kukus."
  ]
},
{
  image: dagingsake ,
  title: "Pasta Daging Sapi dan Keju",
  time: "30 min",
  calories: "600 kcal",
  bahan: [
    "100 g pasta gandum utuh",
    "150 g daging sapi cincang",
    "1/2 bawang bombay, cincang",
    "1 siung bawang putih, cincang",
    "1 sdm minyak zaitun",
    "100 ml saus tomat",
    "50 g keju parut",
    "Garam dan lada secukupnya"
  ],
  resep: [
    "Rebus pasta hingga al dente.",
    "Tumis bawang dan daging sampai matang.",
    "Tambahkan saus, garam, dan lada.",
    "Campur dengan pasta, taburi keju, sajikan."
  ]
}
,
{
  image: omelet,
  title: "Omelet Putih Telur Bayam",
  time: "15 min",
  calories: "250 kcal",
  bahan: [
    "4 putih telur",
    "1 cangkir bayam cincang",
    "1/4 bawang merah iris tipis",
    "1 sdm minyak zaitun",
    "Garam dan lada secukupnya"
  ],
  resep: [
    "Tumis bawang dan bayam hingga layu.",
    "Tuang putih telur, masak hingga matang.",
    "Sajikan hangat."
  ]
},
{
  image: piscang,
  title: "Smoothie Pisang Kacang",
  time: "5 min",
  calories: "300 kcal",
  bahan: [
    "1 buah pisang",
    "1 sdm selai kacang",
    "200 ml susu almond",
    "1 sdt madu (opsional)",
    "Es batu secukupnya"
  ],
  resep: [
    "Blender semua bahan hingga halus.",
    "Tuang ke gelas dan sajikan."
  ]
}


];

function Recipe() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selected, setSelected] = useState(null);

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.time.toLowerCase().includes(search.toLowerCase()) ||
    r.calories.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="content">
      {/* Search Bar */}
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Cari resep sehat..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <span className="clear-search" onClick={() => setSearch("")}>
            ✕
          </span>
        )}
      </div>

      <h3 style={{ marginBottom: "15px" }}>Rekomendasi Resep</h3>

      {filtered.length > 0 ? (
        filtered.map((r, i) => (
          <div
            key={i}
            className="card recipe-item"
            onClick={() => setSelected(r)}
            style={{ cursor: "pointer" }}
          >
            <div className="recipe-image">
              <img src={r.image} alt={r.title} style={{ width: "80px", height: "80px", objectFit : "cover",borderRadius: "12px" }} />
            </div>
            <div className="recipe-info">
              <div className="recipe-title">{r.title}</div>
              <div className="recipe-details">
                <div className="recipe-stat">⏰ <span>{r.time}</span></div>
                <div className="recipe-stat">🔥 <span>{r.calories}</span></div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="not-found-message">
          Resep tidak ditemukan. Coba kata kunci lain.
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelected(null)}>×</span>
            <h3 style={{ textAlign: "center" }}>{selected.title}</h3>
            <div style={{ textAlign: "center", margin: "10px 0" }}>
              <img src={selected.image} alt={selected.title} style={{ width: "80px", height: "80px", borderRadius: "10px" }} />
            </div>
            <p><strong>Waktu Persiapan:</strong> {selected.time}</p>
            <p><strong>Kalori:</strong> {selected.calories}</p>
            <p style={{ marginTop: 10 }}><strong>Bahan:</strong></p>
            <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
              {selected.bahan.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {selected.resep && selected.resep.length > 0 && (
              <>
                <p style={{ marginTop: 10 }}><strong>Instruksi:</strong></p>
                <ol style={{ fontSize: "18px", paddingLeft: "20px" }}>
                  {selected.resep.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipe;
