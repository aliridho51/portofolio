const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Menyajikan file web statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API untuk menyediakan data proyek portofolio
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: "SISMOP-PROMA (Sistem Distribusi MBG)",
            category: "Hak Cipta Perangkat Lunak – Nomor Pencatatan 001385090",
            badge: "Hak Cipta Terdaftar",
            description: "Sistem informasi berbasis web untuk memantau dan mengelola distribusi Program Makan Bergizi Gratis dari dapur penyedia hingga sekolah penerima. Dibangun dengan arsitektur MVC Laravel 12 dan autentikasi multi-peran (Admin, Petugas Kurir, Sekolah). Sistem mencakup penjadwalan distribusi, pelacakan status pengiriman, pelaporan kendala oleh kurir, konfirmasi penerimaan dengan bukti foto, pencatatan pengembalian ompreng, umpan balik sekolah, serta ekspor laporan ke PDF.",
            image: "/images/mbg-screenshot.png",
            tools: [
                "Laravel 12 (PHP 8.2)",
                "MySQL",
                "Blade Template",
                "Tailwind CSS v4",
                "Vite",
                "DomPDF",
                "Docker"
            ],
            features: [
                "Akses Multi-Peran: Hak akses terpisah untuk Admin, Petugas Kurir, dan Sekolah penerima",
                "Pelacakan Distribusi: Status pengiriman bertahap (Belum Dikirim → Dalam Perjalanan → Selesai)",
                "Lapor Kendala: Kurir melaporkan hambatan perjalanan yang langsung tampil di halaman sekolah dan admin",
                "Bukti Penerimaan: Sekolah mengunggah foto serah terima beserta jumlah porsi dan waktu tiba",
                "Pengembalian Ompreng: Pencatatan jumlah wadah yang kembali, rusak, beserta foto kondisinya",
                "Laporan PDF: Rekapitulasi data distribusi yang dapat diekspor ke dokumen PDF"
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/aliridho51/mbg_skripsi"
        }
    ];

    res.json(projects);
});

// Jalankan server hanya saat dieksekusi langsung (lokal).
// Di Vercel, aplikasi di-export dan dijalankan sebagai serverless function.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server berjalan dengan sukses di http://localhost:${PORT}`);
    });
}

module.exports = app;
