const express = require("express");
const app = express();
const PORT = 3000;

// Jeu de données fictif
const USERS = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    email: `user${i + 1}@example.com`,
}));

app.get("/users", (req, res) => {
    // Valeurs par défaut si non fournies
    const page = req.query.page !== undefined ? Number(req.query.page) : 1;
    const size = req.query.size !== undefined ? Number(req.query.size) : 20;

    // Validation stricte des types et des bornes
    const isValidInt = (n) => Number.isInteger(n) && n >= 1;

    if (!isValidInt(page) || !isValidInt(size)) {
        return res
            .status(400)
            .json({ error: "Bad types for provided query parameters" });
    }

    const start = (page - 1) * size;
    const end = start + size;
    const data = USERS.slice(start, end);

    res.json(data);
});

app.listen(PORT, () => {
    console.log(`✅ Server listening on http://localhost:${PORT}`);
});