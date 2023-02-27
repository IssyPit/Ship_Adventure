var shipImg1, ship;
var seaImg, sea;

function preload(){
shipImg1 = loadAnimation ("ship1.png", "ship2.png", "ship3.png", "ship4.png");
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

 sea = createSprite(200,200,10,10);
sea.addImage(seaImg);
sea.scale = 0.3;
 sea.velocityX = -5;
  ship = createSprite(100,220,20,50);
 ship.addAnimation("ship",shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background("lightblue");
    drawSprites();

    if(sea.x <0){
sea.x =sea.width/8;

    }
 
}
