var BG,background;

var eiy,enemy;

var player,ply;

var score = 0;

function preload(){
  background = loadImage("download.png");

  enemy = loadImage("enemy.jpg");

  player = loadImage("player.jpg");
}

function setup() {

  createCanvas(600,600);

  BG = createSprite(200,200); 
  BG.addImage(background);
  BG.scale = 4;
  BG.velocityY = 1;

  ply = createSprite(300,500); 
  ply.addImage(player);
  ply.scale = 0.3;
  ply.velocityY = 0;

  eiy = createSprite(200,200); 
  eiy.addImage(enemy);
  eiy.scale = 0.5;
  eiy.velocityY = 4;
}

function draw() {

  if(keyDown("d")) {
    ply.velocityX = 1.8;
  }
  else if(keyDown("a")) {
    ply.velocityX = -1.8;
  }
  else {
    ply.velocityX = 0;
  }

  if(eiy.y >= 650) {
    eiy.y = -45
    eiy.x = random(20,580);

  }

  if(BG.y >= 400) {
    BG.y = 200;

  }

  drawSprites();


  textSize(20);
  text("Score: " + score,50,50);
  score = score+1

  if(ply.isTouching(eiy)) {
    ply.velocityX=0;
    score = score-1
    eiy.velocityY = 0;
    BG.velocityY = 0;
    textSize(50);
    text("You Died! Click to restart.",20,250);
  }

  if(mousePressedOver(BG)) {
    score = 0;
    textSize(0);
    eiy.y = -45
    eiy.x = random(20,580);
    eiy.velocityY = 4;
    BG.velocityY = 1;
    ply.x=300;
    ply.y=500;
  }
}