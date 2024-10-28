startGameCM.addEventListener('mouseover', startGame);

endGame.addEventListener('mouseover', winGame);

boundaries.forEach(boundary => {
    boundary.addEventListener('mouseover', loseGame);
})

function startGame(){
    gameRunning = true;
    console.log('game started')
    startGameCM.removeEventListener('mouseover', startGame);
}

function winGame(){
    if(gameRunning)
        console.log('you win')
}

function loseGame(){
    if(gameRunning){
        resetGame();
        console.log('game over');
    }
}

function resetGame(){
    setTimeout(function(){
        location.reload();
    }, 2000)
}
    