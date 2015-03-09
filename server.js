var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (username === "stepstone" && password === "password") {
        res.sendfile('profile.html');
    } else {
        res.send('Invalid login details');
    }
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});