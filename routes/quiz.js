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
        currentQuiz.addPlayer({name: req.body.username, token: req.body.token});
        console.log('Added user ' + req.body.username + ' to quiz.');
        res.render('quiz', currentQuiz['questions'][currentQuiz.currentIndex]);
        //res.send('You would be seeing a quiz right now if this code was finished');
    }
});

router.post('/start', function(req, res, next) {
    var quizLocation = path.resolve(__dirname + './../quiz/Quizzes/' + req.body.quizName + '.json');
    currentQuiz = new Quiz(quizLocation);
    console.log('Started quiz ' + req.body.quizName);
    res.send('Quiz ' + req.body.quizName + ' has been started');
})

router.post('/submit', function(req, res, next) {
    console.log("answer"+ req.body.answer);
    console.log(" and correct is "+ currentQuiz['questions'][currentQuiz.currentIndex]['indexOfCorrect']);
    if (req.body.answer ==currentQuiz['questions'][currentQuiz.currentIndex]['indexOfCorrect']) {
         res.send("that's correct \n you have "+currentQuiz['questions'][currentQuiz.currentIndex]['points']+" points");
        }
    else res.send("sucker \n you have 0 points");
})

module.exports = {router: router};