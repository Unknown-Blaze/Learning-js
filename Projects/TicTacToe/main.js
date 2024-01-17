const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restart = document.querySelector("#restartBtn");
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initialize()

function initialize(){
    running = true;
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restart.addEventListener("click", reset);
    statusText.textContent = `${currentPlayer}'s turn`
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) return;

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < win.length; i++){
        const condition = win[i];
        if (options[condition[0]] != "" && 
        options[condition[0]] == options[condition[1]] &&
        options[condition[0]] == options[condition[2]]){
            cells[condition[0]].style.backgroundColor = "lightgreen";
            cells[condition[1]].style.backgroundColor = "lightgreen";
            cells[condition[2]].style.backgroundColor = "lightgreen";
            roundWon = true
            break;
        }
    }
    if (roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }else if(!options.includes("")){
        statusText.textContent = "Draw!";
    }else{
        changePlayer();
    }
}

function reset(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = ""
        cell.style.backgroundColor = "white";
    }); 
    statusText.textContent = `${currentPlayer}'s turn`;
    currentPlayer = "X";
    running = true;
}