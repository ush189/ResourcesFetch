var express = require('express');
var request = require('request');

var app = express();
var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/prices', function (req, res) {
    request('http://www.resources-game.ch/exchange/kurseliste_json.txt', function(error, response, body) {
        if (error) {
            res.send({});
        } else {
            res.send(JSON.parse(body));
        }
    });
});

app.listen(port, function () {
    console.log('Server listening at port %s', port);
});