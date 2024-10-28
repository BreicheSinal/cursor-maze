startGameCM.addEventListener('mouseover', startGame);

endGame.addEventListener('mouseover', winGame);

boundaries.forEach(boundary => {
    boundary.addEventListener('mouseover', loseGame);
})

function startGame(){
    startGameCM.style.backgroundColor = 'white';
    gameRunning = true;
    startGameCM.removeEventListener('mouseover', startGame);
}

function winGame(){
    if(gameRunning){
        resetGame();
        gameDiv.style.backgroundColor = '#87CEEB';
        gameDiv.innerText = '\n \nGOOD JOB MATE ;) \n YOU MADE IT';
    }
}

function loseGame(){
    if(gameRunning){
        resetGame();
        gameDiv.style.backgroundColor = 'red';
        gameDiv.innerText = '\n \n YOU LOST MATE ;) \n TRY AGAIN!';
    }
}

function resetGame(){
    setTimeout(function(){
        location.reload();
    }, 1450)
}
    