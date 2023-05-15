

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