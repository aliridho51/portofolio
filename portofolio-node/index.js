const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Menyajikan file web statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API untuk menyediakan data proyek
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: "MBG Skripsi",
            category: "Web Application",
            description: "Proyek skripsi pengembangan sistem informasi berbasis web. (Anda bisa mengubah deskripsi ini sesuai dengan detail asli proyek Anda).",
            // Anda bisa mengganti link gambar di bawah ini dengan gambar asli proyek Anda nantinya
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
            tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"], // Sesuaikan dengan bahasa yang dipakai di skripsi
            demoUrl: "#", 
            githubUrl: "https://github.com/aliridho51/mbg_skripsi" // Link mengarah ke repo GitHub Anda
        }
    ];
    
    // Mengirimkan data sebagai response JSON
    res.json(projects);
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan dengan sukses di http://localhost:${PORT}`);
});