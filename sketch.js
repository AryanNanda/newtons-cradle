
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
  world = engine.world;
   bobdiameter = 40;
   var bobPositionX = width/2
   var bobPositionY = height/4
   bobObject1 = new Bob( bobPositionX-bobdiameter*5,bobPositionY,bobdiameter);
   bobObject2 = new Bob( bobPositionX-bobdiameter*4,bobPositionY,bobdiameter);
   bobObject3 = new Bob( bobPositionX-bobdiameter*3,bobPositionY,bobdiameter);
   bobObject4 = new Bob( bobPositionX+bobdiameter*2,bobPositionY,bobdiameter);
   bobObject5 = new Bob( bobPositionX+bobdiameter*1,bobPositionY,bobdiameter);
  roofObject = new Roof(400,50,800,50)
    rope1 = new Rope(bobObject1.body,roofObject.body,-bobdiameter*5.6,1)
    rope2 = new Rope(bobObject2.body,roofObject.body,-bobdiameter*4.3,1)
    rope3 = new Rope(bobObject3.body,roofObject.body,-bobdiameter*3.1,1)
    rope4 = new Rope(bobObject4.body,roofObject.body,-bobdiameter*1.8,1)
    rope5 = new Rope(bobObject5.body,roofObject.body,-bobdiameter*5,1)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
}
}
function DrawCons(Constraint){
bobBodyposition=Constraint.bodyA.position
roofbodyposition=Constraint.bodyB.position
roofbodyoffset= Constraint.pointB
roofbodyX=roofbodyposition.x+roofbodyoffet.x
roofbodyY=roofbodyposition.y+roofbodyoffet.y
line(bobBodyposition.x,bobBodyposition.y,roofbodyX,roofbodyY)
}
var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });


