let boxes = document.getElementsByClassName("box");
let currentPlayer = "X";
// let gameReset = document.getElementById('reset');
// let clr = "";
let winner = false;

const winningCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5],
   
];


for(box of boxes) {
    box.addEventListener('click', handleCellClick);
}

function handleCellClick (event) {
   let clickedCell = event.target;
   clickedCell.innerHTML = currentPlayer;
    playerChange();
    handleWinnerCheck();
   
}

function handleWinnerCheck() {
    let WinnerFound = false;
    for(let i = 0; i < 8; ++i) {
        const winningCondition = winningCondition[i];
        let cell1 = Document.getElementById(winningCondition[0].tostring()).innerHTML;
        let cell2 = Document.getElementById(winningCondition[1].tostring()).innerHTML;
        let cell3 = Document.getElementById(winningCondition[2].tostring()).innerHTML;
        if(cell1 === '' || cell2 === '' || cell3 ==='') {
            continue;
        }
        if(cell1 === cell2 && cell2 === cell3) {
            winner = true;
            console.log("Winner is" + currentPlayer);
            return;
        }
    }
}
        
function playerChange  () {
    currentPlayer = currentPlayer === "X" ? "O" :"X";
}

function clearScreen() {
    let clr = "";
    boxes.value = clr;
}

