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
            caption: "Halaman login Sistem Distribusi MBG",
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
        },
        {
            id: 2,
            title: "SIAKAD Keuangan MI Syariah — Sistem Pembayaran SPP & Administrasi Keuangan Madrasah",
            category: "Aplikasi Web Keuangan & Payment Gateway",
            period: "2026",
            description: "Sistem informasi administrasi keuangan madrasah untuk mengelola tagihan SPP, infaq, dan jenis pembayaran lainnya secara transparan. Dilengkapi integrasi pembayaran otomatis menggunakan Midtrans Payment Gateway serta pembagian hak akses untuk Bendahara (Admin), Kepala Madrasah, dan Wali Santri.",
            image: "/images/mi-syariah-screenshot.png",
            caption: "Halaman login SIAKAD Keuangan MI Syariah",
            tech: [
                "PHP 8.2",
                "Laravel 12",
                "Laravel Breeze",
                "MySQL",
                "Midtrans Snap & Webhook",
                "Tailwind CSS",
                "Vite"
            ],
            features: [
                "Akses 3 peran: Bendahara (kelola tagihan & verifikasi), Kepala Madrasah (monitoring laporan), dan Wali Santri (pembayaran)",
                "Pembayaran online otomatis terintegrasi dengan Midtrans Snap Token serta verifikasi status via Webhook (SHA-512 signature)",
                "Dukungan pembayaran manual dengan unggah bukti transfer (Approve/Reject) maupun pencatatan bayar tunai di loket",
                "Pengelolaan master data Tahun Ajaran aktif, Jenis Pembayaran, serta pengaturan keringanan biaya bagi santri tertentu",
                "Cetak kwitansi pembayaran digital untuk wali santri dan ekspor laporan keuangan ke format CSV"
            ],
            githubUrl: "https://github.com/aliridho51/mi-syariah"
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
