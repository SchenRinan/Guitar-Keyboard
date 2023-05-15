//game function
function game(){
    drawCanvas();
    generateChords();
    animation = requestAnimationFrame(game)
}

game();