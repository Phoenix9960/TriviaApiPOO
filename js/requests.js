import Categories from './categories.js';
import Quiz from './quiz.js';

class Requests {
    trivia;

    static getQuestions() {
        fetch(this.makeUrl())
            .then((response) => response.json())
            .then((data) => {
                this.trivia = new Quiz(data);
                this.trivia.checkCode();
            });
            
    }

    static getCategories() {
        Categories.printCategories();
    }

    static makeUrl() {
        let url = 'https://opentdb.com/api.php?';
        const cantQuestions = document.getElementById('nQuestions').value;
        const category = document.getElementById('container-categories').value;
        const level = document.getElementById('difficulty').value;
        const type = document.getElementById('type').value;
    
        if(cantQuestions != ''){
            url += `amount=${cantQuestions}`;
            if(category != ''){
                url += `&category=${category}`;
            }
            if(level != ''){
                url += `&difficulty=${level}`;
            }
            if(type != ''){
                url += `&type=${type}`;
            }
            return url;
        }else {
            return undefined;
        }
    }

}

export default Requests;