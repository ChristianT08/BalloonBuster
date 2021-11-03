// Moving Background
var bg,bgimg
var redimg
var blueimg
var pinkimg
var greenimg
var arrowimg
var bow,bowimg
var arrowgroup 
var redgroup 
var bluegroup 
var pinkgroup 
var greengroup 
function preload()
{
  bgimg=loadImage("background0.png")
  redimg=loadImage("red_balloon0.png")
  blueimg=loadImage("blue_balloon0.png")
  pinkimg=loadImage("pink_balloon0.png")
  greenimg=loadImage("green_balloon0.png")
  arrowimg=loadImage("arrow0.png")
  bowimg=loadImage("bow0.png")

}

function setup()
{ 
  bg=createSprite(0,0,20,20)
  //Giving Animation to Bg
  bg.addImage("background",bgimg)
  bg.scale=2
  bg.velocityX=-4

  bow=createSprite(380,200,50,400)
  bow.addImage("bow",bowimg)
  arrowgroup=new Group()
  redgroup=new Group()
  bluegroup=new Group()
  pinkgroup=new Group()
  greengroup=new Group()
}

function draw()
{
  background("black")
  if(keyDown("space")){
  spawnArrows()
  }
  
  bow.y=mouseY
  //Making Bg Countious 
  if(bg.x<0)
  {
bg.x=bg.width/2
  }
  spawnRed()
  spawnBlue()
  spawnPink()
  spawnGreen()
  spawnArrows()
  if (arrowgroup.isTouching(redgroup)) {
    redgroup.destroyEach()
  }
  if (arrowgroup.isTouching(bluegroup)) {
    bluegroup.destroyEach()
  }
  if (arrowgroup.isTouching(pinkgroup)) {
    pinkgroup.destroyEach()
  }
  if (arrowgroup.isTouching(greengroup)) {
    greengroup.destroyEach()
  }
  drawSprites()
}


//Red Balloon
function spawnRed()
{
  if(frameCount%60==0){
var red=createSprite(0,random(20,370))
red.addImage("red",redimg)
red.velocityX=3
red.scale=0.1
redgroup.add(red)
  }
}

//Blue Balloon
function spawnBlue(){
  if(frameCount%60==0){
    var blue=createSprite(0,random(20,370))
    blue.addImage("blue",blueimg)
    blue.velocityX=3
    blue.scale=0.1
    bluegroup.add(blue)
  }
}

//Pink Balloon
function spawnPink(){
  if(frameCount%60==0){
    var pink=createSprite(0,random(20,370))
    pink.addImage("pink",pinkimg)
    pink.velocityX=3
    pinkgroup.add(pink)
  }
}

//Green Balloon
function spawnGreen(){
  if(frameCount%60==0){
    var green=createSprite(0,random(20,370))
    green.addImage("green",greenimg)
    green.velocityX=3
    green.scale=0.1
    greengroup.add(green)
  }
}

function spawnArrows(){
  if(frameCount%60==0){
    var arrow=createSprite(400,random(20,370))
    arrow.addImage("arrow",arrowimg)
    arrow.y=bow.y
    arrow.velocityX=-8
    arrow.scale=0.5
    arrowgroup.add(arrow)
  }
}
