
$(function() {
    var body = document.getElementById("paper") 
    var paper = Raphael(body);
    paper.circle(0,0,50);
    
    var butt = new Button(new Size(100,25));

    /*$('div#paper').click(function( event ){
        paper.rect(event.offsetX, event.offsetY, 50, 25);
      });*/
})

