var car, wall, speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);

  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2);
  {
 function draw() {
}
  drawSprites();
}
var car,wall;
var speed,weight; 
