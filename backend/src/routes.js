const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', (req, res) => {
    
    return res.json();
});


module.exports = routes;