var Play=1;
var END=0;
var playState=Play;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,spwanObsticalgroup;
var score=0
var survivalTime=0;
var gameState=1;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400); 
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.shapeColor = "green";
  console.log(ground.x)
  
banana=createSprite(400,200,30,20);
banana.addAnimation("moving",  bananaImage);
 banana.scale=0.1
    banana.velocityX=-4;
banana.x=banana.width/2;
 console.log(banana.x)
  


  obstacle=createSprite(200,328,20,20);
  obstacle.addAnimation("moving",  obstaceImage);
  obstacle.scale=0.1
   obstacle.velocityX=-4;
  obstacle.x=obstacle.width/2;
  console.log(obstacle.x)
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
}


function draw() {
  
 background("lightgreen"); 
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
   monkey.velocityY=-12;
  }
  
monkey.velocityY=monkey.velocityY+0.8;
  
  
  
  monkey.collide(ground);
  
  
  var survivalTime=0;
  
  stroke("white");
  textSize(20);
  fill("brown");
  
  stroke("black");
  textSize(20);
  
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
  
  spawnObstacle();
  
if(gameState===Play){
  
  if( obstacleGroup.isTouching(monkey)){
    gameState=END;
  }
}
 
 else if(gameState===END) {}
  
  
  
  
  
  
drawSprites();
  
}

function spawnObstacle() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,330,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    console.log( obstacle.velocityX);
    //generate random obstacles
    var rand = Math.round(random(1));
    switch(rand) {
      case 1: obstacle.addImage(obstaceImage);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}

function spawnbanana() {
  if(frameCount % 60 === 0) {
    var banana= createSprite(600,330,10,40);
    //obstacle.debug = true;
    banana.velocityX = -(6 + 3*score/100);
    console.log(banana.velocityX);
    //generate random obstacles
    var rand = Math.round(random(1));
    switch(rand) {
      case 1:banana.addImage(bananaImage);
              break;
      default: break;
    }
     banana.scale = 0.1;
    banana.lifetime = 300;
    //add each obstacle to the group
   FoodGroup.add(banana);
  
  }
}


