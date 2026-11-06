const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: "SISMOP-PROMA — Sistem Informasi Monitoring Distribusi Program Makan Bergizi Gratis",
            category: "Aplikasi Web • Hak Cipta Kemenkumham RI (No. 001385090)",
            period: "Juli 2026",
            description: "Aplikasi web untuk memantau dan mengelola distribusi Program Makan Bergizi Gratis dari dapur penyedia hingga sekolah penerima. Sistem ini memisahkan hak akses untuk Admin, Petugas Kurir, dan Sekolah agar proses penjadwalan menu, pelacakan pengiriman, pelaporan kendala di lapangan, konfirmasi penerimaan, hingga pendataan pengembalian wadah (ompreng) tercatat rapi.",
            image: "/images/mbg-screenshot.png",
            tech: [
                "PHP 8.2",
                "Laravel 12",
                "MySQL",
                "Tailwind CSS",
                "Vite",
                "DomPDF",
                "Docker"
            ],
            features: [
                "Login multi-peran untuk Admin, Petugas Kurir, dan Sekolah penerima",
                "Penjadwalan distribusi harian dan pemantauan status pengiriman (Belum Dikirim, Dalam Perjalanan, Selesai)",
                "Pelaporan kendala pengiriman oleh kurir yang langsung terlihat di dashboard sekolah dan admin",
                "Konfirmasi penerimaan makanan oleh sekolah disertai unggah foto bukti dan waktu tiba",
                "Pencatatan pengembalian ompreng (jumlah kembali, kondisi baik/rusak, dan foto)",
                "Rekap laporan distribusi yang dapat diunduh dalam format PDF"
            ],
            githubUrl: "https://github.com/aliridho51/mbg_skripsi"
        }
    ];

    res.json(projects);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server berjalan dengan sukses di http://localhost:${PORT}`);
    });
}

module.exports = app;
