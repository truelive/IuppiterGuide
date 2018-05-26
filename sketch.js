// -*- initial commit -*-
var Controls = [];

function setup(){
    createCanvas(300, 150);
    var b1 =new Button(new Size(105,25),"PUSH ME!");
    b1.SetPosition(new Point(0,0));
    Controls.push(b1);
    b1 =new Button(new Size(105,25),"PUSH ME!");
    b1.SetPosition(new Point(0,27));
    Controls.push(b1);
    b1 =new Button(new Size(105,25),"PUSH ME!");
    b1.SetPosition(new Point(0,54));
    Controls.push(b1);
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
    var cont = Controls[i];
    var point = new Point(mouseX,mouseY)
    if(cont.isPointIn(point)){ 
      cont.onClick();
    }
  }
}