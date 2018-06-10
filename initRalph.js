
$(function() {
    var body = document.getElementById("paper") 
    var paper = Raphael(body);
    paper.circle(0,0,50);
    
    var butt = new Button(new Size(100,25),"PUSH ME");
    butt.SetPosition(new Point(100,100))
    butt.SetDisplayObject(paper);
    butt.onClick(function(evt){
        alert("2222");
    })
    /*$('div#paper').click(function( event ){
        paper.rect(event.offsetX, event.offsetY, 50, 25);
      });*/
})

