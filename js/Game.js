class Game {

    //Referencias de los contenedores
    static questionsCont = document.getElementById('questions-container');
    static scoreCont = document.getElementById('score');

    //Referencias de los Selectores
    static questionSel = document.getElementById('nQuestions');
    static categorySel = document.getElementById('container-categories');
    static levelSel = document.getElementById('difficulty');
    static typeSel = document.getElementById('type');

    static newGame(){
        Game.questionsCont.innerHTML = '';
        Game.scoreCont.innerHTML = '';
        Game.refreshSelects()
        Game.enableForm();
    }

    static disableForm(){
        Game.questionSel.disabled = true;;
        Game.categorySel.disabled = true;;
        Game.levelSel.disabled = true;;
        Game.typeSel.disabled = true;;
    }

    static enableForm(){
        Game.questionSel.disabled= false;
        Game.categorySel.disabled= false;
        Game.levelSel.disabled = false;
        Game.typeSel.disabled = false;
    }

    static refreshSelects(){
        Game.questionSel.value = '';
        Game.categorySel.value = '';
        Game.levelSel.value = '';
        Game.typeSel.value = '';
    }
}

export default Game;