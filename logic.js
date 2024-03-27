let gameBoard = [[],[],[]];

let player = "X" || "Y"; // First player to play

function onClickCell(value){
    checkPlayer(value);
}

function checkPlayer(value){
    let cell = document.getElementById("cell_" + value);
    if(player === "X"){
        cell.textContent = "X";
        player = "Y";
    }else{ //player === 1
        cell.textContent = "Y";
        player = "X";
    }
}