const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);
