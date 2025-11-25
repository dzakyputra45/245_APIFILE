const express = require('express');
const ConnectionDatabase = require('./config/db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function startServer() {
    await ConnectionDatabase();
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    });
}

startServer();