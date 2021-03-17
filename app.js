'use strict';

const express = require('express');

const app = express();


// allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,locale");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
