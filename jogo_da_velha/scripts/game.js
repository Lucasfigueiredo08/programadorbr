// iniciar variavels
let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let seqWinner = [];
let msg = "";

let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handleMove(position){

    if(gameOver){
        return;
    }

    if(gameOver != true){
        if(board[position] == ''){    
            board[position] = symbols[playerTime];

            gameOver = isWin();

            if (restart()){
                gameOver = true;
                return;
            }

            playerTime = (playerTime == 0)? 1 : 0;
            // if(playerTime == 0){
            //     playerTime = 1;
            // } else {
            //     playerTime = 0;
            // }

        } else if(!(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '')){
            seqWinner = [pos1, pos2, pos3]; 
            return true;
        } 
    }

    return gameOver;
}

function isWin(){

    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            seqWinner = [pos1, pos2, pos3]; 
            return true;
        } 
    }
}

function restart(){
    let full = 0;
    for (let i = 0; i < board.length; i++){
        if(board[i] != "") {
            full += 1;
            if (full === board.length) {

                setTimeout(() => {
                    alert("Restart!!\n\nNão tem um vencedor!");
                    document.location.reload(true);
                }, 10);
                return true;
                }   
            } else {
                break;
            }
    }
}

