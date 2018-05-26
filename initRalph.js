
$(function() {
    var paper = Raphael(document.getElementById("paper"),600,600);
    paper.circle(0,0,50);
    paper.rect(0, 0, 50, 25);
    $('div#paper').click(function( event ){
        paper.rect(event.offsetX, event.offsetY, 50, 25);
      });
})

