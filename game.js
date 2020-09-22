let gameField = [];
let currentSymbol = 'cross';
let gameOver = false;

function fillGame(id) {
    if (!gameField[id] && !gameOver) {
        if (currentSymbol == 'cross') {
            currentSymbol = 'circle';
            document.getElementById('player-1').classList.remove('inactive-player');
            document.getElementById('player-2').classList.add('inactive-player');

        }

        else {
            currentSymbol = 'cross';
            document.getElementById('player-1').classList.add('inactive-player');
            document.getElementById('player-2').classList.remove('inactive-player');
        }
    }

    gameField[id] = currentSymbol;
    console.log(gameField);
    draw();
    winGame();
}

function draw() {
    for (let i = 0; i < gameField.length; i++) {
        if (gameField[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (gameField[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function winGame() {
    let winner;

    if (gameField[1] == gameField[2] && gameField[2] == gameField[3] && gameField[1]) { winner = gameField[1]; document.getElementById('line-1').style.transform = 'scaleX(1)'; }
    if (gameField[4] == gameField[5] && gameField[5] == gameField[6] && gameField[4]) { winner = gameField[4]; document.getElementById('line-2').style.transform = 'scaleX(1)'; }
    if (gameField[7] == gameField[8] && gameField[8] == gameField[9] && gameField[7]) { winner = gameField[7]; document.getElementById('line-3').style.transform = 'scaleX(1)'; }

    if (gameField[1] == gameField[4] && gameField[4] == gameField[7] && gameField[1]) { winner = gameField[1]; document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)'; }
    if (gameField[2] == gameField[5] && gameField[5] == gameField[8] && gameField[2]) { winner = gameField[2]; document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)'; }
    if (gameField[3] == gameField[6] && gameField[6] == gameField[9] && gameField[3]) { winner = gameField[3]; document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)'; }

    if (gameField[1] == gameField[5] && gameField[5] == gameField[9] && gameField[1]) { winner = gameField[1]; document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)'; }
    if (gameField[3] == gameField[5] && gameField[5] == gameField[7] && gameField[3]) { winner = gameField[3]; document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)'; }

    if (winner) {
        console.log('You win', winner);
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
            document.getElementById('restart-btn').classList.add('restart-btn');
        },1200);

    }
}
function restart() {
    fullReset = document.getElementById('restart-btn');
        location.reload();  
}