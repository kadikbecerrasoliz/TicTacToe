'use strict';

const movementButtons = document.querySelectorAll('.movement');
let playerTurn = '1';

let board = [['', '', ''],['', '', ''],['', '', '']];
let posCounter = 0;

const startGame = function() {
    [...movementButtons].forEach(function(el, idx) {
        el.addEventListener('click', function() {
            // 1st use-case: position is not empty
            if(this.innerHTML) {
                alert('This position is already occupied');
                return;
            }

            let [posX, posY] = findCoords(idx);

            // 2nd use-case: position is empty
            // 2.1st use-case: player one's turn
            if(playerTurn === '1') {
                this.innerHTML = 'X';
                board[posX][posY] = 'X';
                verifyWinner();
                playerTurn = '2';
            }
            // 2.2nd use-case: player two's turn
            else if(playerTurn === '2') {
                this.innerHTML = 'O';
                board[posX][posY] = 'O';
                verifyWinner();
                playerTurn = '1';
            }

            posCounter ++;
        });
    });
}

const verifyWinner = function() {
    let playerSymb = playerTurn === '1' ? 'X' : 'O';

    // 1st use-case: a player wins
    if(board[0][0] === playerSymb  && board[1][1] === playerSymb && board[2][2] === playerSymb) {
        alert(`Player ${playerTurn} wins!`);
        reset();
        return;
    }

    if(board[0][0] === playerSymb  && board[0][1] === playerSymb && board[0][2] === playerSymb) {
        alert(`Player ${playerTurn} wins!`);
        reset();
        return;
    }

    if(board[0][0] === playerSymb  && board[1][0] === playerSymb && board[2][0] === playerSymb) {
        alert(`Player ${playerTurn} wins!`);
        reset();
        return;
    }

    if(board[0][2] === playerSymb  && board[1][2] === playerSymb && board[2][2] === playerSymb) {
        alert(`Player ${playerTurn} wins!`);
        reset();
        return;
    }

    if(board[1][0] === playerSymb  && board[1][1] === playerSymb && board[1][2] === playerSymb) {
        alert(`Player ${playerTurn} wins!`);
        reset();
        return;
    }

    if(board[2][0] === playerSymb  && board[2][1] === playerSymb && board[2][2] === playerSymb) {
        alert(`Player ${playerTurn} wins!`);
        reset();
        return;
    }

    if(board[0][2] === playerSymb  && board[1][1] === playerSymb && board[2][0] === playerSymb) {
        alert(`Player ${playerTurn} wins!`);
        reset();
        return;
    }

    // 2nd use-case: no winner
    if(posCounter === 9) {
        alert(`Nobody wins!`);
        reset();
        return;
    }
}

const reset = function() {

    // Reset the graphic board
    [...movementButtons].forEach(function(el) {
        el.innerHTML = '';
    });

    // Reset the array board
    board = [['', '', ''],['', '', ''],['', '', '']];

    // Reset player turn
    playerTurn = '1';

    // Reset the board pos counter
    posCounter = 0;
}

const findCoords = function(idx) {
    switch(idx) {
        case 0: return [0, 0];
        case 1: return [0, 1];
        case 2: return [0, 2];
        case 3: return [1, 0];
        case 4: return [1, 1];
        case 5: return [1, 2];
        case 6: return [2, 0];
        case 7: return [2, 1];
        case 8: return [2, 2];
    }
}

startGame();
