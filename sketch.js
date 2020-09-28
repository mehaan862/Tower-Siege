const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
	world = engine.world;

  ground=new Ground(0,670,1600,10);
  polygon=new Box(50,200,20,20);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);  

  ground.display();
  polygon.display();
  
  drawSprites();
}