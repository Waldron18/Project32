class Box{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            restitution: 0.5,
            friction: 0.2,
            density:0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        this.image = loadImage("redboximg.PNG");
        World.add(world,this.body);
    }
    display(){
        
        var angle = this.body.angle;
        if(this.body.speed < 3){
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        } 
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
  
    }
}
  