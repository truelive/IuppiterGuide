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
        this.graphics = paper.rect(this.position.x, this.position.y,this.size.Width,this.size.Height);
        var bg = new Color(193,232,190)
        this.graphics.attr({fill:bg.ToString()});
        this.graphics.click(this.onClickEvent());
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