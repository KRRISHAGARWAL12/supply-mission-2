class Log{
    constructor(x,y,width,height){
        var p = {
            restitution:0.8,
            friction:1,
            density:1.0
        }
        
        
        
        this.box = Bodies.rectangle(x,y,width,height,p);
        this.width = width;
        this.height = height;
        
        World.add(world,this.box);
    
    }
    display(){
        push ();
        translate (this.box.position.x,this.box.position.y)
        
        fill ("orange");
        stroke ("black");
        strokeWeight (3);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}