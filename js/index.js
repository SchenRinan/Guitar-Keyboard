//initial values
let keys=[];
let test = 'Numpad1';
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "25px Arial";
ctx.textAlign = "center";
let animation;
let frames = 0;

//Create canvas
function drawCanvas(){
    console.log(frames)

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //highlight numberpads
    if(keys['Numpad3']){
        ctx.beginPath();
        ctx.fillStyle = "skyblue";
        ctx.rect(0, 575, 100, 25);
        ctx.fill();}
    if(keys['Numpad2']){
        ctx.beginPath();
        ctx.fillStyle = "skyblue";
        ctx.rect(100, 575, 100, 25);
        ctx.fill();}
    if(keys['Numpad1']){
        ctx.beginPath();
        ctx.fillStyle = "skyblue";
        ctx.rect(200, 575, 100, 25);
        ctx.fill();}
    if(keys['Numpad6']){
        ctx.beginPath();
        ctx.fillStyle = "skyblue";
        ctx.rect(0, 550, 100, 25);
        ctx.fill();}
    if(keys['Numpad5']){
        ctx.beginPath();
        ctx.fillStyle = "skyblue";
        ctx.rect(100, 550, 100, 25);
        ctx.fill();}  
    if(keys['Numpad4']){
        ctx.beginPath();
        ctx.fillStyle = "skyblue";
        ctx.rect(200, 550, 100, 25);
        ctx.fill();}  
    
    //draw numberbase on canvas
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, 300, 600);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 550);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 550);
    ctx.stroke();
    ctx.fillText("3", 50, 595);
    ctx.beginPath();
    ctx.rect(0, 575, 100, 25);
    ctx.stroke();
    ctx.fillText("2", 150, 595);
    ctx.beginPath();
    ctx.rect(100, 575, 100, 25);
    ctx.stroke();
    ctx.fillText("1", 250, 595);
    ctx.beginPath();
    ctx.rect(200, 575, 100, 25);
    ctx.stroke();
    ctx.fillText("6", 50, 570);
    ctx.beginPath();
    ctx.rect(0, 550, 100, 25);
    ctx.stroke();
    ctx.fillText("5", 150, 570);
    ctx.beginPath();
    ctx.rect(100, 550, 100, 25);
    ctx.stroke();
    ctx.fillText("4", 250, 570);
    ctx.beginPath();
    ctx.rect(200, 550, 100, 25);
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.rect(0, 515, 300, 35);
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(0, frames);
    ctx.lineTo(300, frames);
    ctx.stroke();
    //Running Background on game field
    if(frames % 120 === 0){

    }

    frames++;
}


//create listener that detects keys press combination
document.addEventListener ("keydown", (event) => {
    keys = (keys || []);
        keys[event.code]=true;
    
    if(keys['Space']){
        console.log(keys)
//put a function that will check if key combination is the same as the one on place
    }
    if(keys['Numpad3']){
        ctx.beginPath();
        ctx.rect(0, 575, 100, 25);
        ctx.fill();
    }
}, false);

document.addEventListener("keyup", function (e) {
    keys[e.code]=false;
    stop();
}, false);



//game function
function game(){
    drawCanvas();
    animation = requestAnimationFrame(game)
}

game();