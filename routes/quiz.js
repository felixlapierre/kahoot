var express = require('express');
var router = express.Router();
var path = require('path');
var Quiz = require('./../quiz/quiz');

let currentQuiz = null;

/* Get the current quiz */
router.get('/', function (req, res, next) {
    if(currentQuiz === null) {
        res.render('users');
    }
    else
    {
        currentQuiz.addPlayer(req.body.username, req.body.token);
        console.log('Added user ' + req.body.username + ' to quiz.');
        res.send('You would be seeing a quiz right now if this code was finished');
    }
});

router.post('/start', function(req, res, next) {
    var quizLocation = path.resolve(__dirname + './../quiz/Quizzes/' + req.body.quizName + '.json');
    currentQuiz = new Quiz(quizLocation);
    console.log('Started quiz ' + req.body.quizName);
    res.send('Quiz ' + req.body.quizName + ' has been started');
})

module.exports = {router: router};