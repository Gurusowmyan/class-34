const Engine = Matter.Engine;
const World=Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;
var box1,box2,box3,rope;


function setup() {
  createCanvas(3000,800);
  engine=Engine.create();
  world =engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(600,600,1200,20);
  ball = new Ball(400,100,20);
  box1 = new Box(900,100,70,70);

  rope = new Rope(ball.body,{x:300, y:50});
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  ground.display();
  box1.display();
  rope.display();
  ball.display();

  
  
}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //  }
}
