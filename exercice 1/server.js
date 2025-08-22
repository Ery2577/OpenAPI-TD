const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.status(200).send('pong');
});

app.listen(PORT, () => {
    console.log(` Serveur démarré sur http://localhost:${PORT}`);
    console.log(` Testez avec : http://localhost:${PORT}/ping`);
});