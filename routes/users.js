var express = require('express');
var router = express.Router();
var login = require('./../controller/authenticate/login');
var register = require('./../controller/authenticate/register');

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

/* Register user */
router.get('/register', function(req, res, next) {
    res.render('register', {error: false});
})

router.post('/register', function(req, res, next) {
    const username = req.body.username;

    let registerResult = register(username, req.body.password);
    
    if (registerResult) {
        res.render('index', {message: 'regSuccess'});
    }
    else {
        res.render('register', {error: "fail"});
    }
})

module.exports = router;
