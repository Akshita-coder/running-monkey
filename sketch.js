
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(50,350,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.5
  
  ground = createSprite(380,200,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
  
  score = 0;
  
}


function draw() {
   background(220);
  
  if(ground.x > 0){
    ground.x = ground.width/2;
  }
  
  //spawnObstacles();
 // spawnBananas();
  
  if(keyDown("space") && monkey.y > 300){
    monkey.velocityYn= -12;
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  drawSprites();
  
  fill("black")
  textSize(25);
  text("score"+score,50,350);  
  
}

function spwanObstacles(){
  if(frameCount % 150 === 0){
    var obstacles = createSprite(200,380,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    
    var rand = Math.round(random(1));
    switch(rand){
        case 1: obstacle.addImage(obscaleImage);
                break;
       default:break;        
    }
    
    obstacle.scale = 0.25;
    obstacle.lifetime = 400;
    
    obstacleGroup.add(obstacles);
  }
}

function spwanBanana(){
  
  if(frameCount % 160 === 0){
    var banana = createSprite(200, 300,10,10);
    banana.y = Math.round(random(150,310));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
    bananaGroup.add(banana);
  }
}


