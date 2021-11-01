const COMBOS = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export function checkWinner(gameData, turno) {
    for (let i = 0; i < COMBOS.length; i++) {
        let won = true;
        for (let j = 0; j < COMBOS[i].length; j++) {
            let id = COMBOS[i][j]
            won = gameData[id] == turno && won
        }

        if (won) {
            return true
        }
    }
    return false
}

export function checkTie(gameData) {
    let boardFull = true

    for (let i = 0; i < gameData.length; i++) {
        boardFull = gameData[i] != ' ' && boardFull
    }
    if (boardFull) {
        return true
    }

    return false
}

export function spaziVuoti(gameData){
    let EMPTY = [];

    for( let id = 0; id < gameData.length; id++){
        if(!gameData[id]) EMPTY.push(id);
    }

    return EMPTY;
}

let player = {
    computer: 'O',
    man: 'X'
}

export function minimaxRoot(gameData) {
    let bestMove = -9999
    let bestMoveFound

    for(let i = 0; i < gameData.length; i++) {
        if(gameData[i] == ' ') {
            gameData[i] = 'O'

            let evaluation = minimax(-Infinity, Infinity, gameData, false)

            gameData[i] = ' '

            if(evaluation >= bestMove) {
                bestMove = evaluation
                bestMoveFound = i
            }
        }
    }

    return bestMoveFound
}

function minimax(alpha, beta, gameData, isMaximizer) {
    if(checkWinner(gameData, 'O'))    return 10;
    if(checkWinner(gameData, 'X'))    return -10;
    if(checkTie(gameData))          return 0;

    if(isMaximizer) {
        let bestMove = -9999;

        for(let i = 0; i < gameData.length; i++) {
            if(gameData[i] == ' ') {
                gameData[i] = 'O';

                let moveEval = minimax(alpha, beta, gameData, false);
                bestMove = Math.max(bestMove, moveEval);

                gameData[i] = ' ';

                alpha = Math.max(alpha, bestMove)
                if (beta <= alpha) {
                    return bestMove
                }
            }
        }    
        return bestMove;
    } else {
        let bestMove = 9999;

        for(let i = 0; i < gameData.length; i++) {
            if(gameData[i] == ' ') {
                gameData[i] = 'X';
            
                let moveEval = minimax(alpha, beta, gameData, true);
                bestMove = Math.min(bestMove, moveEval);

                gameData[i] = ' ';

                beta = Math.min(beta, bestMove)
                if (beta <= alpha) {
                    return bestMove
                }
            }
        }

        return bestMove;
    }
}