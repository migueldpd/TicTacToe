let player = "X" || "O"; //Players
let gameInProgress = true;

function onClickCell(value){
    if (gameInProgress && document.getElementById("cell_" + value).textContent === "") {
        checkPlayer(value);
        const winner = isThereWinner();
        if (winner) {
            console.log("Winner : " + winner);
            gameInProgress = false; // Set game state to false if there's a winner
        } else {
            console.log("No winner yet");
        }
        placeSound();
    } else if (!gameInProgress) {
        alert("The game is over. Please reset to play again.");
    } else {
        alert("You can't play there.");
    }
}

function checkPlayer(value){
    let cell = document.getElementById("cell_" + value);
    if(player === "X"){
        cell.textContent = "X";
        player = "O";
    }else{ //player === 1
        cell.textContent = "O";
        player = "X";
    }
    const winner = isThereWinner();
    if(winner){
        console.log("Winner : " + winner);
    }
    else
        console.log("No winner yet");
    placeSound();
}

function isThereWinner(){
    let cells = []; //storing all cells in a array.

    for(let i = 1; i <= 9; i++){ //pushing it into the array
        cells.push(document.getElementById("cell_" + i).innerText);
    }

    const possibleWins = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(const comb of possibleWins){
        const [a,b,c] = comb;
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            console.log("Ganhou na posicoes : " + a + "," + b + "," + c);
            return cells[a];
        }
    }
    return null;
}

function resetGame(){ //function that reset the board, and makes the X start the next game
    for(let i = 1; i <= 9; i++){
        document.getElementById("cell_" + i).innerText = "";
        player = "X";
    }
    document.getElementById("hitmark").play();
}

function placeSound(){ //each time a player plays, a place sound sounds.
    document.getElementById("place").play();

}

//TODO : SCORE TRACKING , BOARD SIZE , SOUND EFFECTS AND THEMES !!! 