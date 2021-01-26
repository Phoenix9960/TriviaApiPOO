import Question from './question.js';
import Game from './Game.js';

class Quiz {
    constructor(trivia) {
        this.trivia = trivia;
        this.myQuestions = [];
    }
    static publicQuestions;
    myQuestions;
    apologize = `<div class="apologize">
                            <div class="col-md-6 card shadow">
                                <div class="apologize-card card-body">
                                    <h3>I'm Sorry 😥😥</h3>
                                    <p class="f-weight">The API Doesn't Have Enought Questions For You Query😔😔</p>
                                </div>
                            </div>
                        </div>`;
    button =   `<div class="flex" id="btnAnswers">
                    <button onclick="CalculateScore()" type="button"class="btn btn-info col-md-8 btn-fat">Finish</button>
                </div>`;

    checkCode(){
        const container = document.getElementById('questions-container');
        if(this.trivia.response_code === 0){
            Game.disableForm()
            container.innerHTML = this.createMyQuestions();
            container.innerHTML += this.button;
        }else {
            container.innerHTML = this.apologize;
        }
    }

    createMyQuestions() {
        let myQuestion;
        let nQuestion = 0;
        let questions = ''

        this.trivia.results.forEach((q) => {
            myQuestion = new Question(q.question,q.category,q.difficulty,q.correct_answer,q.incorrect_answers);
            questions += myQuestion.printQuestion(nQuestion);
            this.myQuestions.push(myQuestion);
            nQuestion++;
        });
        Quiz.publicQuestions = this.myQuestions;
        return questions;
    }

    static getQuestions(array){
        return Quiz.publicQuestions;
    }
}

export default Quiz;