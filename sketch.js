
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var surface, ball;
var bin,binImage, ballImage;


function preload(){
	binImage = loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bin = createSprite(964, 520, 20, 20);
	bin.addImage(binImage);
	bin.scale = 0.45;

	bin1 = new Dustbin(902, 505, 10, 120);
	bin2 = new Dustbin(962, 565, 130, 10);
	bin3 = new Dustbin(1024, 585, 10, 120);

	
	ball = new Paper();
	surface = new Ground();
    World.add(world, surface);

	
  
}


function draw() {
  background("black");
  rectMode(CENTER);

  Engine.upadte(engine);
 
  surface.display();
  ball.display();

  bin1.display();
  bin2.display();
  bin3.display();

  keyPressed();
  
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{
			x:12,
			y:13,
		});
	}
}

