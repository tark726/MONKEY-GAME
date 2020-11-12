var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running,monkey_collided
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  monkey_collided = loadImage("sprite_0.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400,400);
monkey = createSprite(50,340,20,20);
  monkey.addAnimation("moving", monkey_running);
 monkey.scale = 0.1;
ground = createSprite(200,380,400,20);
obstacleGroup = createGroup();
 FoodGroup = createGroup();


  
}


function draw() {
 background("white");
 if(gameState===PLAY){
   
 if(keyDown("space")&& monkey.y > 230) {
 monkey.velocityY = -16;
        
    }
monkey.velocityY = monkey.velocityY + 0.6;
  Food();
  obstacles();
   if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
   }
   if(obstacleGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
     obstacleGroup.destroyEach();
     gameState = END;
   }
   stroke("black")
  textSize(20);
  fill("red")
    score =  Math.round(frameCount/30)
  text("Score: "+ score, 200,50);
 }
  if(gameState===END){
    monkey.changeImage(monkey_collided);
     stroke("black")
  textSize(20);
  fill("red")
    text("GAME OVER",200,80);
    score = 0;
  }
   monkey.collide(ground);
  drawSprites();
}
function Food(){
  if(frameCount%100==0){
    
  banana = createSprite(400,200,20,20);
  banana.y = Math.round(random(70,260));
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 134;
  banana.scale = 0.1;
  FoodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%250==0){
    
  obstacle = createSprite(400,340,20,20);
  //obstacle.y = Math.round(random(70,260));
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.lifetime = 134;
  obstacle.scale = 0.16;
  obstacleGroup.add(obstacle);
  }
}





