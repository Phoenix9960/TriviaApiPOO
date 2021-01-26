import Requests from './requests.js';
import Score from './score.js';
import Game from './Game.js';

function getQuestions() {
    Requests.getQuestions();
}

function CalculateScore() {
    Score.getArray();
}

function newGame(){
    Game.newGame();
}

Requests.getCategories();
Game.refreshSelects();

window.getQuestions = getQuestions;
window.CalculateScore = CalculateScore;
window.newGame = newGame;