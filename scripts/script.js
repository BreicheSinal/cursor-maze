startGameCM.addEventListener('mouseover', startGame);

endGame.addEventListener('mouseover', winGame);

boundaries.forEach(boundary => {
    boundary.addEventListener('mouseover', loseGame);
})

function startGame(){
    gameRunning = true;
    console.log('game started');
    startGameCM.removeEventListener('mouseover', startGame);
}

function winGame(){
    if(gameRunning){
        resetGame();
        console.log('you win');
        gameDiv.style.backgroundColor = '#87CEEB';
        gameDiv.innerText = '\n \nGOOD JOB MATE ;) \n YOU MADE IT';
    }
}

function loseGame(){
    if(gameRunning){
        resetGame();
        console.log('game over');
        gameDiv.style.backgroundColor = 'red';
        gameDiv.innerText = '\n \n YOU LOST MATE ;) \n TRY AGAIN!';
    }
}

function resetGame(){
    console.log('game reset');
    setTimeout(function(){
        location.reload();
    }, 1450)
}
    