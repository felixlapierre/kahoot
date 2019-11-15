var express = require('express');
var router = express.Router();
var login = require('./../controller/authenticate/login');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* Login user */
router.post('/login', function (req, res, next) {
    const username = req.body.username;
    if(req.body.mike === undefined) {
        res.render('index', {error: "nomike"});
        return;
    }

    let loginResult = login(username, req.body.password);
    
    if (loginResult) {
        res.render('users', {username: username});
    }
    else {
        res.render('index', {error: "nologin"});
    }
});

module.exports = router;
