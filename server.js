const express = require('express');
const pg = require('pg');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(pg.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

import {add, subtract} from "./math.js"

add(10,50);

subtract(40,20);