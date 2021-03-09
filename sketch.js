const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onSling";

function preload(){
    polygonimage= loadImage("polygon.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1000,400);
   
    ball = Bodies.circle(50,200,20,{density:1.5});
    World.add(world,ball);

    slingshot = new Slingshot(this.ball,{x:100,y:200});

    ground = new Ground(500,390,1000,20);
    stand1 = new Ground(400,300,250,10);
    stand2 = new Ground(700,200,180,10);

    //stand1 boxes
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(410,275,30,40);
    box6 = new Box(440,275,30,40);
    box7 = new Box(470,275,30,40);
    box8 = new Box(500,275,30,40);
    box9 = new Box(340,235,30,40);
    box10 = new Box(370,235,30,40);
    box11 = new Box(400,235,30,40);
    box12 = new Box(430,235,30,40);
    box13 = new Box(460,235,30,40);
    box14 = new Box(370,195,30,40);
    box15 = new Box(400,195,30,40);
    box16 = new Box(430,195,30,40);
    box17 = new Box(400,155,30,40);
  

    //stand2 boxes
    block1 = new Box(640,175,30,40);
    block2 = new Box(670,175,30,40);
    block3 = new Box(700,175,30,40);
    block4 = new Box(730,175,30,40);
    block5 = new Box(760,175,30,40);
    block6 = new Box(670,135,30,40);
    block7 = new Box(700,135,30,40);
    block8 = new Box(730,135,30,40);
    block9 = new Box(700,95,30,40);

  

}

function draw(){
    background("grey")
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    //stand1 boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();

    //stand2 boxes
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    slingshot.display();
    
    imageMode(CENTER);
    image(polygonimage,ball.position.x,ball.position.y,40,40);
}


function mouseDragged(){
    if(gameState === "onSling"){
      Body.setPosition(ball,{x:mouseX,y:mouseY})
    }
  }
  
  function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
  }
  
  function keyPressed(){
    if(keyCode===32){
      Body.setPosition(ball,{x:100,y:200});
      slingshot.attach(ball);
      gameState = "onSling";
    }
  }