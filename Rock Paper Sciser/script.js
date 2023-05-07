const ranImg = document.getElementById("opponentImg");
const imgId = document.getElementById("displayImg");
const winner = document.getElementById("win");
const myPoint = document.getElementById("Your_point");
const opponentPoint = document.getElementById("opponent_point");
let options = ["Rock", "Paper", "Scissor"];
let human;

function rock () {
    human = "Rock";
    imgId.src = "rock.png";
   
    let computer = opponentPlayer();
    if (computer === "Rock") {
        ranImg.src = "rock.png";
    }
    else if(computer === "Paper") {
        ranImg.src = "paper.png";
    }
    else if (computer === "Scissor") {
        ranImg.src = "scissor.png";
    }

    game(computer);
}


function paper () {
    human = "Paper";
    imgId.src = "paper.png";
    let computer = opponentPlayer();
    if (computer === "Rock") {
        ranImg.src = "rock.png";
    }
    else if(computer === "Paper") {
        ranImg.src = "paper.png";
    }
    else if (computer === "Scissor") {
        ranImg.src = "scissor.png";
    }

    game(computer);
}

function scissor () {
    human = "Scissor";
    imgId.src = "scissor.png";
    let computer = opponentPlayer();
    if (computer === "Rock") {
        ranImg.src = "rock.png";
    }
    else if(computer === "Paper") {
        ranImg.src = "paper.png";
    }
    else if (computer === "Scissor") {
        ranImg.src = "scissor.png";
    }

    game(computer);
}

function opponentPlayer () {
    
    let randomImg = Math.floor(Math.random() * 3);
    return options[randomImg];
}

function playround (human, computer) {
    console.log(human);
    console.log(computer);
    if(human == computer){
        return "Its a Draw !!";
    }
    else if (human =='Rock' && computer == 'Paper') {
        return "You Lose";
    }
    else if (human =='Paper' && computer == 'Scissor'){
        return "You Lose";
    }
    else if (human =='Scissor' && computer == 'Rock') {
        return "you Lose";
    }
    else {
        return "You Win..";
    }
}

function game (computer) {
    let numb = loop();
    let result = playround(human, computer);
    if (result === "You Lose") {
        winner.innerHTML = "You Lose";
    }
    else if (result === "You Win..") {
        winner.innerHTML = "You Win..";
        myPoint.innerHTML = numb;
    }
    else if (result === "Its a Draw !!"){
        winner.innerHTML = "Its a Draw !!";
    }
}

function loop() {
    for(i = 0; i > 6; ++i){
        
        console.log(i);
    }
    // winner.innerHTML = i;
    
    
}
