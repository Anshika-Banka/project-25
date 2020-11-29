var paper,wall1,wall2,wall3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,height,800,20);
	paper =  new Paper(100,100);
	wall1Sprite=createSprite(width/2,height-50,200,20);
	wall1Sprite.shapeColor="red";
	wall2Sprite=createSprite(width/2-100,height-100,20,100);
	wall2Sprite.shapeColor="red";
	wall3Sprite=createSprite(width/2+100,height-100,20,100);
	wall3Sprite.shapeColor="red";
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
 
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	}
}



