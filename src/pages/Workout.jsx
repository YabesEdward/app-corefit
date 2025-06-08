import { useState } from "react";

const workouts = [
  {
    title: "Full Body HIIT",
    duration: "30 menit",
    calories: "300 kkal",
    category: "weightloss",
    color: "#ff6b6b",
    description: "Latihan interval intensitas tinggi yang menargetkan semua kelompok otot untuk pembakaran lemak maksimal.",
    benefits: [
      "Membakar kalori dengan efisien",
      "Meningkatkan kesehatan kardiovaskular",
      "Meningkatkan metabolisme selama berjam-jam setelah latihan",
      "Membangun daya tahan"
    ],
    instructions: [
      "Pemanasan 5 menit dengan kardio ringan",
      "Lakukan setiap gerakan selama 40 detik dengan istirahat 20 detik",
      "Ulangi rangkaian 3-4 kali",
      "Dinginkan tubuh dengan peregangan"
    ],
    youtubeId: "ml6cT4AZdqI",
    equipment: ["Tidak perlu alat (berat badan saja)", "Opsional: matras"],
    intensity: "Tinggi"
  },
  {
    title: "Yoga untuk Pemula",
    duration: "20 menit",
    calories: "150 kkal",
    category: "maintain",
    color: "#f3d438",
    description: "Rangkaian yoga lembut yang sempurna untuk pemula untuk meningkatkan fleksibilitas dan kesadaran diri.",
    benefits: [
      "Mengurangi stres dan kecemasan",
      "Meningkatkan fleksibilitas dan keseimbangan",
      "Memperkuat koneksi pikiran-tubuh",
      "Lembut untuk persendian"
    ],
    instructions: [
      "Mulailah dengan posisi duduk yang nyaman",
      "Ikuti panduan instruktur untuk setiap pose",
      "Bernapaslah dalam-dalam sepanjang sesi",
      "Akhiri dengan pose relaksasi"
    ],
    youtubeId: "v7AYKMP6rOE",
    equipment: ["Matras yoga"],
    intensity: "Rendah"
  },
  {
    title: "Brisk Walking",
    duration: "45 menit",
    calories: "180 - 250 kkal",
    category: "maintain",
    color: "#f38838",
    description: "Jalan cepat dengan kecepatan sedang yang meningkatkan detak jantung dengan dampak rendah pada sendi.",
    benefits: [
      "Meningkatkan kesehatan jantung",
      "Dampak rendah pada persendian",
      "Dapat dilakukan di mana saja",
      "Meningkatkan mood dan energi"
    ],
    instructions: [
      "Gunakan sepatu yang nyaman",
      "Pertahankan postur tubuh yang baik",
      "Ayunkan lengan secara alami",
      "Pertahankan kecepatan di mana Anda masih bisa berbicara tapi tidak bernyanyi"
    ],
    youtubeId: "GXX6IdIYoyo",
    equipment: ["Sepatu yang nyaman"],
    intensity: "Sedang"
  },
  {
    title: "Pilates",
    duration: "45 menit",
    calories: "170 - 250 kkal",
    category: "maintain",
    color: "#f3eb38",
    description: "Latihan berdampak rendah yang memperkuat inti tubuh dan memperbaiki postur.",
    benefits: [
      "Memperkuat otot inti",
      "Memperbaiki postur tubuh",
      "Meningkatkan fleksibilitas",
      "Meningkatkan kesadaran tubuh"
    ],
    instructions: [
      "Fokus pada gerakan terkontrol",
      "Aktifkan otot inti sepanjang latihan",
      "Bernapas dalam-dalam",
      "Gerakan dengan presisi"
    ],
    youtubeId: "rrdxJwZtDMA",
    equipment: ["Matras", "Opsional: resistance band"],
    intensity: "Rendah-Sedang"
  },
  {
    title: "Zumba",
    duration: "45 menit",
    calories: "350-500 kkal",
    category: "weightloss",
    color: "#FF6B6B",
    description: "Latihan dansa energik yang menggabungkan gerakan Latin dengan aerobik.",
    benefits: [
      "Membakar kalori dengan cara menyenangkan",
      "Meningkatkan koordinasi tubuh",
      "Baik untuk kesehatan jantung",
      "Mengurangi stres"
    ],
    instructions: [
      "Ikuti gerakan instruktur",
      "Jangan khawatir tentang kesempurnaan gerakan",
      "Pertahankan energi positif",
      "Minum air yang cukup"
    ],
    youtubeId: "vNPQSnHmiTA",
    equipment: ["Sepatu olahraga", "Pakaian nyaman"],
    intensity: "Tinggi"
  },
  {
    title: "Push-Up Challenge",
    duration: "15 menit",
    calories: "100-150 kkal",
    category: "bodybuilding",
    color: "#343535",
    description: "Latihan dasar untuk membangun kekuatan tubuh bagian atas.",
    benefits: [
      "Memperkuat dada, bahu, dan trisep",
      "Meningkatkan daya tahan otot",
      "Tidak memerlukan peralatan",
      "Dapat dilakukan di mana saja"
    ],
    instructions: [
      "Posisi plank dengan tangan selebar bahu",
      "Turunkan tubuh hingga dada mendekati lantai",
      "Dorong kembali ke posisi awal",
      "Pertahankan form yang tepat"
    ],
    youtubeId: "IODxDxX7oi4",
    equipment: ["Tidak perlu alat"],
    intensity: "Sedang-Tinggi"
  },
  {
    title: "Squat Routine",
    duration: "20 menit",
    calories: "150-200 kkal",
    category: "weightgain",
    color: "#a99393",
    description: "Latihan fundamental untuk membangun kekuatan kaki dan bokong.",
    benefits: [
      "Memperkuat otot paha dan bokong",
      "Meningkatkan mobilitas pinggul",
      "Membantu postur tubuh",
      "Membakar kalori efektif"
    ],
    instructions: [
      "Berdiri dengan kaki selebar bahu",
      "Turunkan pinggul seperti mau duduk",
      "Jaga dada tegak dan lutut sejajar kaki",
      "Kembali ke posisi berdiri"
    ],
    youtubeId: "aclHkVaku9U",
    equipment: ["Tidak perlu alat", "Opsional: dumbbell"],
    intensity: "Sedang"
  },
  {
    title: "Plank Challenge",
    duration: "10 menit",
    calories: "50-100 kkal",
    category: "maintain",
    color: "#f38838",
    description: "Latihan isometrik untuk memperkuat inti tubuh.",
    benefits: [
      "Memperkuat otot perut",
      "Meningkatkan stabilitas tubuh",
      "Baik untuk postur tubuh",
      "Mengurangi nyeri punggung"
    ],
    instructions: [
      "Posisi seperti push-up dengan bertumpu pada lengan bawah",
      "Jaga tubuh lurus dari kepala ke kaki",
      "Kencangkan otot perut",
      "Pertahankan posisi"
    ],
    youtubeId: "pSHjTRCQxIw",
    equipment: ["Matras"],
    intensity: "Sedang"
  },
  {
    title: "Jump Rope",
    duration: "15 menit",
    calories: "200-300 kkal",
    category: "weightloss",
    color: "#ab8981",
    description: "Latihan lompat tali yang efektif untuk kardio.",
    benefits: [
      "Membakar kalori cepat",
      "Meningkatkan koordinasi",
      "Memperbaiki kepadatan tulang",
      "Portable dan murah"
    ],
    instructions: [
      "Pegang tali dengan kedua tangan",
      "Lompat dengan pergelangan kaki",
      "Jaga lompatan rendah dan terkendali",
      "Tingkatkan kecepatan secara bertahap"
    ],
    youtubeId: "1BZM2Vre5oc",
    equipment: ["Tali lompat"],
    intensity: "Tinggi"
  },
  {
    title: "Burpees",
    duration: "10 menit",
    calories: "100-150 kkal",
    category: "weightloss",
    color: "#97d1aa",
    description: "Latihan seluruh tubuh yang menantang.",
    benefits: [
      "Melatih kekuatan dan kardio",
      "Membakar banyak kalori",
      "Meningkatkan daya tahan",
      "Tidak butuh peralatan"
    ],
    instructions: [
      "Berdiri lalu jongkok dengan tangan di lantai",
      "Lemparkan kaki ke belakang (posisi push-up)",
      "Lakukan push-up (opsional)",
      "Lompat kembali ke posisi jongkok lalu berdiri"
    ],
    youtubeId: "wS4OsJ4yzx4",
    equipment: ["Tidak perlu alat"],
    intensity: "Tinggi"
  },
  {
    title: "Mountain Climbers",
    duration: "10 menit",
    calories: "80-120 kkal",
    category: "weightloss",
    color: "#38d4f3",
    description: "Latihan dinamis untuk inti tubuh dan kardio.",
    benefits: [
      "Menguatkan inti tubuh",
      "Meningkatkan detak jantung",
      "Melatih beberapa kelompok otot",
      "Meningkatkan kelincahan"
    ],
    instructions: [
      "Posisi push-up dengan tangan di lantai",
      "Tarik lutut secara bergantian ke dada",
      "Jaga punggung lurus",
      "Tingkatkan kecepatan secara bertahap"
    ],
    youtubeId: "nmwgirgXLYM",
    equipment: ["Matras (opsional)"],
    intensity: "Tinggi"
  },
  {
    title: "Lunges",
    duration: "15 menit",
    calories: "100-150 kkal",
    category: "weightgain",
    color: "#9399a9",
    description: "Latihan dasar untuk kaki dan bokong.",
    benefits: [
      "Memperkuat paha dan bokong",
      "Meningkatkan keseimbangan",
      "Memperbaiki fleksibilitas pinggul",
      "Dapat dimodifikasi berbagai variasi"
    ],
    instructions: [
      "Berdiri tegak dengan kaki selebar pinggul",
      "Langkah kaki kanan ke depan, turunkan pinggul",
      "Pastikan lutut tidak melewati jari kaki",
      "Dorong kembali ke posisi awal"
    ],
    youtubeId: "QOVaHwm-Q6U",
    equipment: ["Tidak perlu alat", "Opsional: dumbbell"],
    intensity: "Sedang"
  },
  {
    title: "Boxing Workout",
    duration: "30 menit",
    calories: "300-400 kkal",
    category: "weightloss",
    color: "#bc97d1",
    description: "Latihan tinju untuk kardio dan kekuatan.",
    benefits: [
      "Membakar banyak kalori",
      "Meningkatkan koordinasi tangan-mata",
      "Mengurangi stres",
      "Melatih seluruh tubuh"
    ],
    instructions: [
      "Posisi siap dengan kaki selebar bahu",
      "Kepalkan tangan dan lakukan jab-cross",
      "Kombinasikan dengan gerakan kaki",
      "Tambahkan hook dan uppercut"
    ],
    youtubeId: "V5P5ygmzIxE",
    equipment: ["Sarung tinju (opsional)", "Hand wrap"],
    intensity: "Tinggi"
  },
  {
    title: "Yoga Flow",
    duration: "30 menit",
    calories: "150-200 kkal",
    category: "maintain",
    color: "#f3d438",
    description: "Rangkaian yoga yang mengalir untuk fleksibilitas dan relaksasi.",
    benefits: [
      "Meningkatkan fleksibilitas",
      "Memperkuat otot inti",
      "Meningkatkan fokus mental",
      "Mengurangi ketegangan otot"
    ],
    instructions: [
      "Mulai dengan pose anak (child pose)",
      "Lanjut ke pose kobra (cobra pose)",
      "Transisi ke downward facing dog",
      "Ikuti aliran dengan napas teratur"
    ],
    youtubeId: "6Fd7BkYigig",
    equipment: ["Matras yoga"],
    intensity: "Rendah-Sedang"
  },
  {
    title: "Basketball Drills",
    duration: "45 menit",
    calories: "400-600 kkal",
    category: "weightloss",
    color: "#FF6B6B",
    description: "Latihan bola basket untuk meningkatkan keterampilan dan kebugaran.",
    benefits: [
      "Meningkatkan kelincahan dan koordinasi",
      "Membangun daya tahan kardiovaskular",
      "Melatih kerja tim dan strategi",
      "Membakar banyak kalori"
    ],
    instructions: [
      "Pemanasan dengan dribble statis",
      "Latihan shooting dari berbagai posisi",
      "Drill passing dengan partner",
      "Permainan 3-on-3 atau 5-on-5"
    ],
    youtubeId: "VXo6BDr0p9Y",
    equipment: ["Bola basket", "Sepatu basket", "Lapangan basket"],
    intensity: "Tinggi"
  },
  {
    title: "Soccer Training",
    duration: "60 menit",
    calories: "450-700 kkal",
    category: "weightloss",
    color: "#38d4f3",
    description: "Latihan sepakbola lengkap untuk teknik dan kebugaran.",
    benefits: [
      "Meningkatkan stamina dan daya tahan",
      "Melatih kontrol bola dan kaki",
      "Membangun kerja tim",
      "Latihan seluruh tubuh"
    ],
    instructions: [
      "Pemanasan dengan jogging dan stretching",
      "Drill dribbling melalui cone",
      "Latihan passing dan shooting",
      "Permainan kecil 5v5"
    ],
    youtubeId: "qknP-E-vPQ4",
    equipment: ["Bola sepak", "Sepatu bola", "Cone marker"],
    intensity: "Tinggi"
  },
  {
    title: "Badminton Practice",
    duration: "60 menit",
    calories: "350-500 kkal",
    category: "maintain",
    color: "#f3eb38",
    description: "Latihan bulutangkis untuk teknik dan refleks.",
    benefits: [
      "Meningkatkan refleks dan kecepatan",
      "Melatih kelincahan kaki",
      "Baik untuk koordinasi tangan-mata",
      "Latihan kardiovaskular"
    ],
    instructions: [
      "Pemanasan dengan footwork dasar",
      "Latihan service dan return",
      "Drill smash dan drop shot",
      "Permainan tunggal/ganda"
    ],
    youtubeId: "79uK9hHkqZQ",
    equipment: ["Raket", "Kok", "Lapangan badminton"],
    intensity: "Sedang-Tinggi"
  },
  {
    title: "Swimming Laps",
    duration: "45 menit",
    calories: "400-600 kkal",
    category: "weightloss",
    color: "#387ff3",
    description: "Latihan berenang untuk seluruh tubuh.",
    benefits: [
      "Latihan seluruh tubuh tanpa tekanan sendi",
      "Meningkatkan kapasitas paru-paru",
      "Membangun daya tahan",
      "Membakar banyak kalori"
    ],
    instructions: [
      "Pemanasan dengan gaya bebas santai",
      "Latihan teknik gaya dada dan punggung",
      "Interval sprint renang",
      "Dinginkan dengan gaya santai"
    ],
    youtubeId: "sFbYiEkzD2k",
    equipment: ["Baju renang", "Kacamata renang", "Kolam renang"],
    intensity: "Sedang-Tinggi"
  },
  {
    title: "Tennis Drills",
    duration: "60 menit",
    calories: "400-550 kkal",
    category: "maintain",
    color: "#f3d438",
    description: "Latihan tenis untuk teknik dan kebugaran.",
    benefits: [
      "Meningkatkan koordinasi",
      "Melatih kekuatan lengan dan kaki",
      "Membangun strategi permainan",
      "Latihan kardiovaskular"
    ],
    instructions: [
      "Pemanasan dengan rally dasar",
      "Latihan forehand dan backhand",
      "Drill serve dan voli",
      "Permainan set"
    ],
    youtubeId: "FMN9xKGyDkU",
    equipment: ["Raket tenis", "Bola tenis", "Lapangan tenis"],
    intensity: "Sedang-Tinggi"
  },
  {
    title: "Volleyball Practice",
    duration: "60 menit",
    calories: "350-500 kkal",
    category: "maintain",
    color: "#f33838",
    description: "Latihan bola voli untuk teknik tim.",
    benefits: [
      "Meningkatkan loncatan vertikal",
      "Melatih refleks cepat",
      "Kerja tim dan komunikasi",
      "Menguatkan bahu dan lengan"
    ],
    instructions: [
      "Pemanasan dengan passing dasar",
      "Latihan serve dan spike",
      "Drill blocking",
      "Permainan 6v6"
    ],
    youtubeId: "ZJfHxcdWScY",
    equipment: ["Bola voli", "Jaring voli", "Lapangan voli"],
    intensity: "Sedang-Tinggi"
  },
  {
    title: "Table Tennis Training",
    duration: "45 menit",
    calories: "250-350 kkal",
    category: "maintain",
    color: "#ff6b6b",
    description: "Latihan pingpong untuk refleks dan teknik.",
    benefits: [
      "Meningkatkan refleks cepat",
      "Koordinasi tangan-mata",
      "Strategi permainan cepat",
      "Latihan intensitas sedang"
    ],
    instructions: [
      "Pemanasan dengan rally lambat",
      "Latihan forehand dan backhand spin",
      "Drill serve pendek dan panjang",
      "Permainan 11 poin"
    ],
    youtubeId: "hItv3IRU2U8",
    equipment: ["Bet pingpong", "Bola pingpong", "Meja pingpong"],
    intensity: "Sedang"
  },
  {
    title: "Martial Arts (Pencak Silat)",
    duration: "60 menit",
    calories: "500-700 kkal",
    category: "weightloss",
    color: "#343535",
    description: "Latihan bela diri tradisional Indonesia.",
    benefits: [
      "Meningkatkan disiplin diri",
      "Kekuatan dan fleksibilitas",
      "Pertahanan diri",
      "Latihan seluruh tubuh intens"
    ],
    instructions: [
      "Pemanasan dengan jurus dasar",
      "Latihan kuda-kuda dan pukulan",
      "Drill tendangan dan elakan",
      "Latihan dengan partner"
    ],
    youtubeId: "5kZvQrC3o6Y",
    equipment: ["Seragam silat", "Pelindung (opsional)"],
    intensity: "Tinggi"
  },
  {
    title: "Rock Climbing",
    duration: "90 menit",
    calories: "600-800 kkal",
    category: "bodybuilding",
    color: "#7138f3",
    description: "Latihan panjat tebing untuk kekuatan dan ketahanan.",
    benefits: [
      "Membangun kekuatan genggaman",
      "Menguatkan seluruh tubuh",
      "Melatih problem solving",
      "Meningkatkan fleksibilitas"
    ],
    instructions: [
      "Pemanasan stretching menyeluruh",
      "Latihan teknik footwork dasar",
      "Drill climbing dengan rute mudah",
      "Tantang dengan rute sulit"
    ],
    youtubeId: "3bW3o4fYYZI",
    equipment: ["Harness", "Sepatu climbing", "Tali", "Tembok climbing"],
    intensity: "Tinggi"
  },
  {
    title: "Beach Sports (Voli/Football)",
    duration: "60 menit",
    calories: "400-600 kkal",
    category: "weightloss",
    color: "#f38838",
    description: "Latihan olahraga pantai untuk tantangan ekstra.",
    benefits: [
      "Latihan lebih intens di pasir",
      "Membangun kekuatan kaki",
      "Vitamin D dari matahari",
      "Keseruan bermain di pantai"
    ],
    instructions: [
      "Pemanasan dengan jogging di pantai",
      "Latihan voli pantai atau sepakbola",
      "Permainan tim 3v3 atau 4v4",
      "Pendinginan dengan berjalan di air"
    ],
    youtubeId: "QZbujH1l8V8",
    equipment: ["Bola voli/sepak", "Jaring (untuk voli)", "Pakaian renang"],
    intensity: "Tinggi"
  },
  {
    title: "Full Body HIIT",
    duration: "30 menit",
    calories: "300 kkal",
    category: "weightloss",
    color: "#ff6b6b",
    description: "Latihan interval intensitas tinggi yang menargetkan semua kelompok otot untuk pembakaran lemak maksimal.",
    benefits: [
      "Membakar kalori dengan efisien",
      "Meningkatkan kesehatan kardiovaskular",
      "Meningkatkan metabolisme selama berjam-jam setelah latihan",
      "Membangun daya tahan"
    ],
    instructions: [
      "Pemanasan 5 menit dengan kardio ringan",
      "Lakukan setiap gerakan selama 40 detik dengan istirahat 20 detik",
      "Ulangi rangkaian 3-4 kali",
      "Dinginkan tubuh dengan peregangan"
    ],
    youtubeId: "ml6cT4AZdqI",
    equipment: ["Tidak perlu alat (berat badan saja)", "Opsional: matras"],
    intensity: "Tinggi"
  },
  // ... (other original workouts here)

  // New popular workouts
  {
    title: "Tabata Training",
    duration: "20 menit",
    calories: "250-350 kkal",
    category: "weightloss",
    color: "#FF4757",
    description: "Latihan interval intensitas tinggi (4 menit) yang sangat efektif.",
    benefits: [
      "Membakar lemak dengan cepat",
      "Meningkatkan metabolisme hingga 24 jam",
      "Waktu latihan singkat tapi efektif",
      "Dapat dilakukan di rumah"
    ],
    instructions: [
      "Pilih 4 gerakan (contoh: squat jump, push-up, mountain climbers, burpees)",
      "Lakukan setiap gerakan 20 detik, istirahat 10 detik",
      "Ulangi 8 putaran total",
      "Cool down 5 menit"
    ],
    youtubeId: "ml6cT4AZdqI",
    equipment: ["Matras (opsional)"],
    intensity: "Sangat Tinggi"
  },
  {
    title: "Kickboxing",
    duration: "45 menit",
    calories: "500-700 kkal",
    category: "weightloss",
    color: "#FF6B81",
    description: "Kombinasi tinju dan tendangan untuk membakar lemak.",
    benefits: [
      "Membakar kalori sangat efektif",
      "Mengurangi stres",
      "Melatih seluruh tubuh",
      "Meningkatkan koordinasi"
    ],
    instructions: [
      "Pemanasan 10 menit",
      "Latihan kombinasi jab-cross-hook-kick",
      "Latihan intensif dengan heavy bag",
      "Pendinginan dan stretching"
    ],
    youtubeId: "V5P5ygmzIxE",
    equipment: ["Hand wrap", "Sarung tinju (opsional)"],
    intensity: "Tinggi"
  },
  {
    title: "Barre Workout",
    duration: "30 menit",
    calories: "200-300 kkal",
    category: "maintain",
    color: "#D6A2E8",
    description: "Gabungan ballet, yoga, dan pilates untuk toning tubuh.",
    benefits: [
      "Membentuk otot tanpa membesar",
      "Meningkatkan fleksibilitas",
      "Memperbaiki postur tubuh",
      "Low impact"
    ],
    instructions: [
      "Pemanasan dengan peregangan",
      "Latihan kecil di barre (kursi bisa jadi alternatif)",
      "Gerakan isolasi otot kecil",
      "Pendinginan"
    ],
    youtubeId: "yz6z3QoXUyw",
    equipment: ["Kursi/barre", "Matras"],
    intensity: "Sedang"
  },
  {
    title: "HITT Dance",
    duration: "30 menit",
    calories: "300-400 kkal",
    category: "weightloss",
    color: "#FD7272",
    description: "Kombinasi gerakan dance dengan high intensity interval training.",
    benefits: [
      "Membakar kalori sambil bersenang-senang",
      "Meningkatkan mood",
      "Melatih koordinasi",
      "Baik untuk kesehatan jantung"
    ],
    instructions: [
      "Pemanasan 5 menit",
      "Ikuti koreografi sederhana",
      "Tingkatkan intensitas secara interval",
      "Cool down dengan gerakan lambat"
    ],
    youtubeId: "tGhfVdw8Kqk",
    equipment: ["Sepatu nyaman", "Ruang cukup"],
    intensity: "Tinggi"
  },
  {
    title: "Prenatal Yoga",
    duration: "30 menit",
    calories: "150-200 kkal",
    category: "maintain",
    color: "#9AECDB",
    description: "Yoga khusus untuk ibu hamil.",
    benefits: [
      "Mengurangi sakit punggung",
      "Meningkatkan kualitas tidur",
      "Mempersiapkan persalinan",
      "Mengurangi stres"
    ],
    instructions: [
      "Gunakan bantal untuk support",
      "Fokus pada pernapasan",
      "Hindari posisi telentang lama",
      "Lakukan dengan perlahan"
    ],
    youtubeId: "uUgCk6lDItE",
    equipment: ["Matras yoga", "Bantal"],
    intensity: "Rendah"
  },
  {
    title: "Kettlebell Swing",
    duration: "20 menit",
    calories: "250-350 kkal",
    category: "weightloss",
    color: "#F97F51",
    description: "Gerakan dasar kettlebell untuk seluruh tubuh.",
    benefits: [
      "Membangun kekuatan punggung bawah",
      "Meningkatkan daya tahan jantung",
      "Membakar banyak kalori",
      "Memperkuat inti tubuh"
    ],
    instructions: [
      "Pegang kettlebell dengan dua tangan",
      "Ayunkan dari antara kaki ke depan",
      "Gunakan tenaga pinggul, bukan lengan",
      "Jaga punggung tetap lurus"
    ],
    youtubeId: "YSxHifyI6s8",
    equipment: ["Kettlebell (4-12kg)"],
    intensity: "Tinggi"
  },
  {
    title: "Shadow Boxing",
    duration: "30 menit",
    calories: "300-450 kkal",
    category: "weightloss",
    color: "#B33771",
    description: "Latihan tinju tanpa partner atau peralatan.",
    benefits: [
      "Meningkatkan stamina",
      "Melatih refleks",
      "Membakar lemak efektif",
      "Dapat dilakukan di mana saja"
    ],
    instructions: [
      "Posisi siap dengan kaki selebar bahu",
      "Latihan kombinasi jab-cross-hook-uppercut",
      "Tambahkan gerakan kaki",
      "Tingkatkan kecepatan secara bertahap"
    ],
    youtubeId: "wS4OsJ4yzx4",
    equipment: ["Tidak perlu alat"],
    intensity: "Tinggi"
  },
  {
    title: "Pilates Reformer",
    duration: "45 menit",
    calories: "250-350 kkal",
    category: "maintain",
    color: "#6D214F",
    description: "Pilates menggunakan mesin reformer untuk resistance.",
    benefits: [
      "Meningkatkan kekuatan inti",
      "Memperbaiki postur",
      "Low impact",
      "Meningkatkan fleksibilitas"
    ],
    instructions: [
      "Mulai dengan pengaturan resistance ringan",
      "Fokus pada kontrol gerakan",
      "Pertahankan aliran pernapasan",
      "Tingkatkan kesulitan secara bertahap"
    ],
    youtubeId: "rrdxJwZtDMA",
    equipment: ["Reformer machine"],
    intensity: "Sedang"
  },
  {
    title: "Aerial Yoga",
    duration: "50 menit",
    calories: "200-300 kkal",
    category: "maintain",
    color: "#182C61",
    description: "Yoga menggunakan hammock untuk gerakan melayang.",
    benefits: [
      "Meningkatkan fleksibilitas",
      "Mengurangi tekanan pada tulang belakang",
      "Membangun kekuatan tubuh atas",
      "Pengalaman relaksasi unik"
    ],
    instructions: [
      "Mulai dengan gerakan dasar",
      "Gunakan hammock untuk support",
      "Hindari gerakan tiba-tiba",
      "Selalu didampingi instruktur"
    ],
    youtubeId: "6Fd7BkYigig",
    equipment: ["Aerial hammock", "Matras"],
    intensity: "Sedang"
  }
  
];



const categories = [
  { label: "Semua", value: "all" },
  { label: "Weight Loss", value: "weightloss" },
  { label: "Maintain", value: "maintain" },
  { label: "Weight Gain", value: "weightgain" },
  { label: "Bodybuilding", value: "bodybuilding" },
];

function Workout({user}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [hoveredWorkout, setHoveredWorkout] = useState(null);

  const filtered = selectedCategory === "all"
    ? workouts
    : workouts.filter((w) => w.category === selectedCategory);

  const closeModal = () => {
    setSelectedWorkout(null);
  };

  return (
    <div className="content" id="workout-page">
      <div className="header">
        <div className="profile-pic">👤</div>
        <div>
          <div className="greeting">Hello,</div>
          <div className="user-name">{user}</div>

        </div>
      </div>

      {/* Scrollable category */}
      <div className="category-scroll">
        {categories.map((cat) => (
          <div
            key={cat.value}
            className={`category-chip ${selectedCategory === cat.value ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.value)}
          >
            {cat.label}
          </div>
        ))}
      </div>

      {/* Workout Cards */}
      <div className="workout-grid">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className={`workout-box ${hoveredWorkout === idx ? "hovered" : ""}`}
            style={{ backgroundColor: item.color }}
            onClick={() => setSelectedWorkout(item)}
            onMouseEnter={() => setHoveredWorkout(idx)}
            onMouseLeave={() => setHoveredWorkout(null)}
          >
            <div className="workout-title">{item.title}</div>
            <div className="workout-meta">
              ⏱ {item.duration} &nbsp; 🔥 {item.calories}
            </div>
          </div>
        ))}
      </div>

      {/* Workout Detail Modal */}
      {selectedWorkout && (
        <div className="workout-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            
            <h2>{selectedWorkout.title}</h2>
            <div className="workout-meta">
              <span>⏱ {selectedWorkout.duration}</span>
              <span>🔥 {selectedWorkout.calories}</span>
              <span>⚡ Intensitas: {selectedWorkout.intensity}</span>
            </div>
            
            <div className="video-container">
              {selectedWorkout.youtubeId !== "sdfkjhsd87" ? (
                <iframe 
                  width="100%" 
                  height="315" 
                  src={`https://www.youtube.com/embed/${selectedWorkout.youtubeId}`} 
                  title="Video tutorial YouTube" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              ) : (
                <div className="video-unavailable">
                  <p>Video tutorial tidak tersedia</p>
                  <p>Silakan cari "{selectedWorkout.title} tutorial" di YouTube</p>
                </div>
              )}
            </div>
            
            <div className="section">
              <h3>Deskripsi</h3>
              <p>{selectedWorkout.description}</p>
            </div>
            
            <div className="section">
              <h3>Manfaat</h3>
              <ul>
                {selectedWorkout.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h3>Petunjuk Latihan</h3>
              <ol>
                {selectedWorkout.instructions.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ol>
            </div>
            
            <div className="section">
              <h3>Peralatan yang Dibutuhkan</h3>
              <ul>
                {selectedWorkout.equipment.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workout;