
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hanger;
var rope1,rope2,rope3,rope4,rope5,rope5;
var bob1,bob2,bob3,bob4,bob5,bob6;
function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hanger = new Roof(400,100,600,20);
	bob1 = new bob(400,200,100);
	bob2 = new bob(200,200,100);
	bob3 = new bob(200,200,100);
	bob4 = new bob(200,200,100);
	bob5 = new bob(200,200,100);
	bob6 = new bob(200,200,100);
	rope1 = new chain(bob1.body,hanger.body,0,0);
	rope2 = new chain(bob2.body,hanger.body,100,0);
	rope3 = new chain(bob3.body,hanger.body,200,0);
	rope4 = new chain(bob4.body,hanger.body,-100,0);
	rope5 = new chain(bob5.body,hanger.body,-200,0);
	rope6 = new chain(bob6.body,hanger.body,-300,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  hanger.display()
  bob1.display()
  rope1.display()
  bob2.display()
  rope2.display()
  bob3.display()
  rope3.display()
  bob4.display()
  rope4.display()
  bob5.display() 
  rope5.display()
  bob6.display()
  rope6.display()
  drawSprites();
 
}



