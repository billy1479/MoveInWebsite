const express = require('express');
const path = require('path')
require('dotenv').config();

const app = express();

app.use(express.static(path.join((__dirname, 'client/'))))

module.exports = app