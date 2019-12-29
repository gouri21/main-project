class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
display(){
    rectMode(CENTER);
   fill("white");
   var pos = this.body.position
   pos.x = -2;
   rect(pos.x,pos.y,this.width,this.height);
   
}
}