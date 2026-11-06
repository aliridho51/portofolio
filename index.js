const app = require('./portofolio-node/index.js');
const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server berjalan dengan sukses di http://localhost:${PORT}`);
    });
}

module.exports = app;

