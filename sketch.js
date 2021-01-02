
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1=createSprite(1250,885,300,20);
	box1.shapeColor="red";

	box2=createSprite(1100,845,20,100);
	box2.shapeColor="red";

	box3=createSprite(1400,845,20,100);
	box3.shapeColor="red";

	ground= new Ground(900,height,1900,50);

	ball= new Ball(100,100,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();
  ball.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:28,y:-28});
	}
}







