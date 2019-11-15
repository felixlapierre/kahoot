

var getQuizList = function() {
    var contents = require('./../../quiz/Quizzes/list.json')
    return contents.quizzes;
}

module.exports = getQuizList;