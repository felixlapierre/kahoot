var fs = require('fs');
var Player = require('./Player.js');

//var validator = require('jsonschema').Validator;
class quiz{
    constructor(questionFilePath){
        var contents = fs.readFileSync(questionFilePath);
        contents= JSON.parse(contents);
        this.name = contents["title"];
        this.questions = contents["quiz"];
        this.players = [];
        this.currentIndex= 0;
        return this;
    }

    updateIndex(){
      return this.currentIndex++;
    }

    addPlayer(playerInfo){
        this.players.push(new Player(playerInfo));
    }

    randomizeQuestions(){
        var currentIndex = this.questions.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = this.questions[currentIndex];
          this.questions[currentIndex] = this.questions[randomIndex];
          this.questions[randomIndex] = temporaryValue;
        }
      
        return this.questions;
      }


    /**
     * 
     * @param int questionIndex 
     * @param [] playerAnswers {playerIndex, answer, isCorrect}
     */

    validateAnswers(questionIndex, playerAnswers){

    }
      


}


module.exports = quiz;