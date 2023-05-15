//initial values
let keys=[];
let test = 'Numpad1';
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "25px Arial";
ctx.textAlign = "center";
let animation;

//Create canvas
function drawCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(keys['Numpad3']){
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.rect(0, 575, 100, 25);
        ctx.fill();}


    ctx.fillStyle = "black";
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
}


//create listener that detects keys presses
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
    
    
    // switch (event.code){
    //     case 'Numpad3': ctx.beginPath();
    //                     ctx.rect(0, 575, 100, 25);
    //                     ctx.fill();
    //                     break;
    //     case 'Numpad2': ctx.beginPath();
    //                     ctx.rect(100, 575, 100, 25);
    //                     ctx.fill();
    //                     break;
    //     case 'Numpad1': ctx.beginPath();
    //                     ctx.rect(200, 575, 100, 25);
    //                     ctx.fill();
    //                     break;
    //     case 'Numpad6': ctx.beginPath();
    //                     ctx.rect(0, 550, 100, 25);
    //                     ctx.fill();
    //                     break;
    //     case 'Numpad5': ctx.beginPath();
    //                     ctx.rect(100, 550, 100, 25);
    //                     ctx.fill();
    //                     break;
    //     case 'Numpad4': ctx.beginPath();
    //                     ctx.rect(200, 550, 100, 25);
    //                     ctx.fill();
    //                     break;
    // }
}, false);

document.addEventListener("keyup", function (e) {
    keys[e.code]=false;
    stop();
}, false);
//create a combination listener when space is pressed



//game function
function game(){
    drawCanvas();
    animation = requestAnimationFrame(game)
}

game()