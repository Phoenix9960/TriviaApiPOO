import Quiz from './quiz.js';

class Score {

    static btnAgain =   `<button onclick="newGame()" type="button"class="btn btn-warning col-md-8 btn-fat">Try Again</button>`
    
    static getArray(){
        let userAnswers = [];
        let triviaAnswers = Quiz.getQuestions();
        document.querySelectorAll('input').forEach((input) => {
            if(input.checked === true){
                userAnswers.push(input.value)
            }
        });
        
        if(userAnswers.length === triviaAnswers.length){
            document.querySelectorAll('input').forEach((input) => {
                input.checked = false;
            });
            document.getElementById('btnAnswers').innerHTML = Score.btnAgain;
            let corrects = 0;
            Score.addVisibility()
            for(let i=0;i<userAnswers.length; i++){
                if(triviaAnswers[i].isCorrect(userAnswers[i],i)){
                    corrects++;
                }
            }
            Score.printScoreboard(corrects,triviaAnswers.length)
        } else {
            alert('Please Answer all Questions')
        }


    }5

    static addVisibility(){
        let answers = document.getElementsByClassName('overQuestion');
        for (var i = 0; i<answers.length; i++) {
            answers[i].classList.remove("hiddeElement");
        }
    }

    static printScoreboard(rigths,cuantity){
        let points = parseInt((100/cuantity)*rigths);
        let mesague = `you got right ${rigths} of ${cuantity} Questions\nScore: ${points} Points`;
        let congrat = "";
        if(points === 100){
            congrat = "Excelent";
        }else if(points >= 80 ){
            congrat="Congratulations";
        }else if(points >= 50){
            congrat ="Good job";
        }else if(points <= 10){
            congrat ="Maybe the next time";
        }else {
            congrat ="Luck for the next time"
        }
        const scoreboard = `<div class="scoreboard">
                                <h2 class="scoreboard-text">${congrat}</h2>
                                <p class="scoreboard-text">${mesague}</p>
                            </div>`
        
        document.getElementById('score').innerHTML += scoreboard;
    }
}

export default Score;