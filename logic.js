let player = "X" || "O"; //Players

function onClickCell(value){
    if(document.getElementById("cell_" + value).textContent === ""){
        checkPlayer(value);
        isThereWinner();
    }else{
        alert("You cant play there");
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
}

function isThereWinner(){
    let cells = []; //storing all cells in a array.

    for(let i = 1; i <= 9; i++){ //pushing it into the array
        cells.push(document.getElementById("cell_" + i).innerText);
    }

    //checking if someone won the game in each possible way
    if(cells[0] === cells[1] && cells[1] === cells[2] && cells[0] != "" || //hor 1
       cells[3] === cells[4] && cells[4] === cells[5] && cells[3] != "" || //hor2
       cells[6] === cells[7] && cells[7] === cells[8] && cells[6] != "" || //hor3
       cells[0] === cells[3] && cells[3] === cells[6] && cells[0] != "" || //ver1
       cells[1] === cells[4] && cells[4] === cells[7] && cells[1] != "" || //ver2
       cells[2] === cells[5] && cells[5] === cells[8] && cells[2] != "" || //ver3
       cells[0] === cells[4] && cells[4] === cells[8] && cells[0] != "" || //dia1
       cells[2] === cells[4] && cells[4] === cells[6] && cells[2] != "" ){ //dia2
        alert("GAME IS OVER");
    }
}

function resetGame(){
    for(let i = 1; i <= 9; i++){
        document.getElementById("cell_" + i).innerText = "";
        player = "X";
    }
}