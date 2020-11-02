var tower,towerImage,door,doorImage,doorGroup,climber,climberImage,climberGroup,ghost,ghostImage;



function preload(){
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  doorGroup=new Group();
  climberImage=loadImage("climber.png")
  climberGroup=new Group();
  ghostImage=loadImage("ghost-standing.png")

}

function setup(){
  
  createCanvas(600,600)
  
  tower=createSprite(300,300)
  tower.addImage("tower",towerImage)
  tower.velocityY=2
  
  ghost=createSprite(200,100,50,50)
  ghost.addImage("GHOST",ghostImage)
  ghost.scale=0.3
  
  
}
  
function draw(){
  background("pink")
  
  if(tower.y>580){
    tower.y=300;
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  
if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }  
  
  if(keyDown("space")){
    ghost.velocityY= -3
  }
  ghost.velocityY=ghost.velocityY+0.3
  
  
  
  spawndoor();
  
 
  
drawSprites()  
} 

function spawndoor(){
  if(frameCount%250===0){
  door=createSprite(200,-40)
  door.addImage("doors",doorImage)
  door.velocityY=3;
  doorGroup.add(door)
    door.lifetime=800;
    
    
    climber=createSprite(200,10)
    climber.addImage("climbers",climberImage)
    climber.velocityY=3
    climberGroup.add(climber)
    climber.lifetime=800;
    
  }








}