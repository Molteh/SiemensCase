// Require express and create an instance of it
let express = require('express');
let app = express();

let used = true;

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    //floor.sectors[0].open = false;
    if (used) {
        res.send('Used');
    } else {
        res.send('Unused');
    }

});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// On localhost:3000/unused
app.get('/unused', function (req, res) {
    used = false;
    res.send('Set used to false');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
