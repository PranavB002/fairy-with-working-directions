var starImg,bgImg;
var star, starBody;
var fairy, fairyImage


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()

{
    fairyImage=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
}

function setup() {
	createCanvas(800, 750);

	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);


	fairy=createSprite(300, 226)
	fairy.addAnimation("fairy",fairyImage)

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

 fairy.scale= 0.3

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 

		fairy.WorldX=MouseX
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.x=fairy.x+20
		
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x=fairy.x-20

	
	
	}
}