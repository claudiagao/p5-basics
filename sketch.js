var newWidth = 100;
var newHeight = 50;

//setup functions executes once
function setup(){
    createCanvas(600,400);
    background(135,1,19);
}

//draw function loops forever
function draw(){
    // background(50);
    if(mouseIsPressed){
      noStroke();
      fill(184,4,255,50);
      ellipse(mouseX,mouseY,newWidth,newHeight);
     }
}

