
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  dust =loadImage("dustbingreen.png")
  }

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;

  ground= new Ground(500,370,1200,20)
  

  paper = new Paper(200,200,30);
  binBottom = new Bin(980,355,138,20);
  binLeft = new Bin(900,300,20,100);
  binRight = new Bin(1050,300,20,100);

	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background("lightpink");

  ground.display();
  binBottom.display();
  binLeft.display();
  binRight.display();

  image(dust,880,210,190,150); 
  paper.display();


 
}
function keyPressed(){
  if (keyCode === UP_ARROW ){

    console.log("in")
    Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-20})
  }

}




