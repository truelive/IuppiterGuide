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

class Controll{
    constructor(size){
        this.size = size;
        this.position = new Point(0, 0);
        this.graphics = createGraphics(size.Width, size.Height);
    }
    SetPosition(point){
        this.position = point;
    }
    GetSize(){
        return this.size;
    }
    OnDraw(){}
    draw(){
        this.OnDraw();
        image(this.graphics, this.position.x, this.position.y);
    }
    onClick(){}
}

class Button extends Controll{
    constructor(size, label){
        super(size);
        this.label = label;
        this.drawGraphics = function (){
            this.graphics.textSize(12);
            this.graphics.rect(0,0,this.size.Width-1, this.size.Height-1);
            this.graphics.textAlign(CENTER,CENTER);
            var textMargin = 3;
            this.graphics.text(this.label,textMargin,textMargin,this.size.Width-textMargin, this.size.Height-textMargin);
        };
        this.drawGraphics();
    }
    onClick(){}
    OnDraw(){

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