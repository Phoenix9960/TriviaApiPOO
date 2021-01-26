class Question {
    constructor(text, category, level, correctAns, answers) {
        this.text = text;
        this.category = category;
        this.level = level;
        this.correctAns = correctAns;
        this.answers = answers;
    }

    printQuestion(nQuestion){
        return `<div class="col-md-12 mt-3">
                    <div class="card shadow">
                        <div class="card-body p-Relative">
                            <div class="headQuestion ${this.paintBG(this.level)}">
                                <h3 class="text-Center">${this.category}</h3>
                                <p class="mt-3 f-weight text-Center">${this.text}</p>
                            </div>
                        </div>
                        <div class="col-md-12 card-body">
                            <div class="btn-group-vertical btn-group-lg dis-Block bg-img" role="group">
                                ${this.printAsnwers(nQuestion)}
                            </div>
                        </div>
                        <div class="overQuestion flex hiddeElement" id="answerIcon${nQuestion}">
                        </div>
                    </div>
                </div>`;
    }
    printAsnwers(nQuestion) {
        this.mixAsnwers(this.correctAns,this.answers)
        let answers = '';
        let nAnswer = 0;

        this.answers.forEach((asnwer) => {
            answers += `<input type="radio" class="btn-check" name="btnradio${nQuestion}" id="btnradio${nQuestion}-${nAnswer}" value="${asnwer}" required>
                        <label class="btn btn-outline-secondary" for="btnradio${nQuestion}-${nAnswer}">${asnwer}</label>`;
            nAnswer++;
        })

        return answers;
    }

    mixAsnwers(correctAns, incorrectsAns) {
        incorrectsAns.splice(parseInt(Math.random()*incorrectsAns.length),0,correctAns)
    }

    paintBG(level){
        let color = '';

        switch(level){
            case 'easy': color = 'bg-lv-easy'
                break;
            case 'medium': color = 'bg-lv-med'
                break;
            case 'hard': color = 'bg-lv-hard'
                break;
        }

        return color;
    }

    isCorrect(userAns, nQuestion){
        const container = `document.querySelector(answerIcon[${nQuestion}])`;
        if(userAns === this.correctAns){
            //container.innerHTML = container.innerHTML = '<img class="checking-Icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/1024px-Light_green_check.svg.png" alt="Green Checked">';
            return true;
        } else {
            return false;
        }
        //Podria agregar lo de cambiar el background de todo la pregunta si es correcta o no aqui mismo
        
        // 
        // container.innerHTML = '<img class="checking-Icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/1024px-Light_green_check.svg.png" alt="Green Checked">';
        // container.innerHTML = '<img class="checking-Icon" src="https://www.seekpng.com/png/full/2-27167_cross-brush-png-symbol.png" alt="wrong cross read">'
    }

}

export default Question;