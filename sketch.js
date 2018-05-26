// -*- initial commit -*-
var Controls = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    Controls.push(new Button(new Size(105,25),"PUSH ME!"))
}

function draw(){
  var innerStep = 50;
  for(var i = 0; i<Controls.length;i++){
    Controls[i].draw();
  }
    
 //ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function mouseClicked(){
  for(var i = 0; i<Controls.length;i++){
    Controls[i].onClick();
  }
}