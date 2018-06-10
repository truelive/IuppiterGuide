class Size{
    constructor(Width, Height){
        this.Height = Height;
        this.Width = Width;
    }
}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Color{
    constructor(R,G,B){
        this.R = R;
        this.G = G;
        this.B = B;
    }
    ToString(){
        return "rgb("+this.R+", "+this.G+", "+this.B+")";
    }
}

class ControllBuilder{
    constructor(raphaelPaper){
        this.paper = raphaelPaper;
    }
}

class Controll{
    constructor(size){
        this.size = size;
        this.position = new Point(0, 0);
    }

    SetDisplayObject(paper){

    }
    SetPosition(point){
        this.position = point;
    }
    GetSize(){
        return this.size;
    }
    onClick(){} 
    OnDraw(){}
    draw(){
        this.OnDraw();
        image(this.graphics, this.position.x, this.position.y);
    }
    onClickEvent(){
        onClick();
    }
    
}

class Button extends Controll{
    constructor(size, label){
        super(size);
        this.label = label;
    }
    SetDisplayObject(paper){
        this.paper = paper;
        var set = this.paper.set();
        var box = this.paper.rect(this.position.x, this.position.y,this.size.Width,this.size.Height);
        var bg = new Color(193,232,190);
        box.attr({fill:bg.ToString()});
        
        var text = this.paper.text(this.position.x+this.size.Width/2, this.position.y+this.size.Height/2,this.label);
        text.cursor = "help";
        set.push(box);
        set.push(text);
        this.graphics = set;
        this.onClick(function(evt){})
    }
    onClick(fun){
        this.graphics.unclick(this._curClicEvent);
        this.graphics.click(fun);
        this._curClicEvent = fun;
    }
}

class ListItem extends Controll{
    constructor(size, label, value){
        super(size);
        this.value = value;
        this.label = label;
    }
}

class VerticalList extends Controll{
    constructor(size){
        super(size);
        this.ValueList = [];
        this.ItemSize = new Size(20,50);
    }
    AddValueToList(value, title){
        this.ValueList.push(new ListItem(this.ItemSize, label, value));
    }
}