
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bg,backgroundImg;
var fighter,fighterImg;
var NPCImg,NPC;

function preload()
{
  backgroundImg = loadImage("Bg.jpg");
  fighterImg = loadImage("PC.png");
  NPCImg = loadImage("NPC.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

    fighter = createSprite(270,500,20,60)
    fighter.addImage(fighterImg);

    NPC = createSprite(1400,520,20,20)
    NPC.addImage(NPCImg);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(backgroundImg);
  if(keyCode == RIGHT_ARROW  && fighter.x <=1400)
  {
    fighter.x += 20;
  }
  if(keyCode == LEFT_ARROW && fighter.x >=270)
  {
    fighter.x -= 20;
  }
  drawSprites();
}



