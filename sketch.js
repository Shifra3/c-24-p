
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	ball= new Ball(100,100,20)
	ground = new Ground(400,680,800,20)
	sideLeft = new Side(600,570,30,200)
	sideRight = new Side(750,570,30,200)
  
}


function draw() {
  
  background(0);
  Engine.update(engine)
  ball.display()
  ground.display()
 sideLeft.display()
 sideRight.display()
}
function keyPressed(){
if (keyIsDown(UP_ARROW)){
Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-20})	
}
}

