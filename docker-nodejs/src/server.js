const express = require('express');
const { unflatten } = require('flat');
const pug = require('pug');

const app = express();
app.use(require('body-parser').json())

app.get('/', function (req, res) {
    const template = pug.compile(`nothing`,{"debug":true});
    res.end("<h1>500k and a fucking special gift are waiting for you</h1>"+template());
});

app.post('/vulnerable', function (req, res) {
    debugger;
    let object = unflatten(req.body);
    res.json(object);
});
 
app.listen(80);