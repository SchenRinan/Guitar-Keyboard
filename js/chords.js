let chordsOnscreen = [];

function generateChords(){
    console.log(frames)
    for(i=0; i< testChordsArray.length; i++){
    if(frames === testChordsArray[i].frames){
        chordsOnscreen.push(new Chords(testChordsArray[i].chords))
    }
}
    for(i=0; i < chordsOnscreen.length; i++){
        chordsOnscreen[i].draw();
        chordsOnscreen[i].update();
    }
    
}

class Chords{
    constructor(chords){
        this.chords = chords;
        this.y = 0;
    }
    draw(){
        ctx.beginPath();
        ctx.rect(0, this.y-12.5, 300, 25);
        ctx.stroke();
        if(this.chords.includes(3)){
            ctx.beginPath();
            ctx.fillStyle = "pink";
            ctx.rect(0, this.y, 100, 12.5);
            ctx.fill();}
        if(this.chords.includes(2)){
            ctx.beginPath();
            ctx.fillStyle = "skyblue";
            ctx.rect(100, this.y, 100, 12.5);
            ctx.fill();}
        if(this.chords.includes(1)){
            ctx.beginPath();
            ctx.fillStyle = "chartreuse";
            ctx.rect(200, this.y, 100, 12.5);
            ctx.fill();}
        if(this.chords.includes(6)){
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.rect(0, this.y - 12.5, 100, 12.5);
            ctx.fill();}
        if(this.chords.includes(5)){
            ctx.beginPath();
            ctx.fillStyle = "blueviolet";
            ctx.rect(100, this.y - 12.5, 100, 12.5);
            ctx.fill();}
        if(this.chords.includes(4)){
            ctx.beginPath();
            ctx.fillStyle = "orange";
            ctx.rect(200, this.y - 12.5, 100, 12.5);
            ctx.fill();}
    }
    update(){
        this.y++;
    }
}


ctx.beginPath();
ctx.fillStyle = "pink";
ctx.rect(0, 575, 100, 25);
ctx.fill();