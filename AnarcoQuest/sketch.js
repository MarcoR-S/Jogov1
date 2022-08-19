var principal, principalWalk
var background, backgroundImg

function preload(){
  //principalWalk = loadAnimation("Boneco1A.png","Boneco2A.png")
  principalWalk = loadImage ("Boneco1A.png")
  backgroundImg = loadImage("Cenário-Vila.png")
}

function setup() {
  //createCanvas(500,500);
  createCanvas(windowWidth,windowHeight);
  
  background = createSprite(windowWidth, windowHeight)
  background.addImage("bgimg", backgroundImg)
  
  principal = createSprite(250,250);
  principal.addImage("bonecoimg", principalWalk)
  principal.scale = 0.065

  imageMode(CENTER)
}

function draw() {









  camera();
  walk();
  drawSprites();
}

function walk(){

  //Movimento
  if(keyIsDown(37)){
    principal.position.x = principal.position.x -8
  }
  if(keyIsDown(38)){
    principal.position.y = principal.position.y -8
  }
  if(keyIsDown(39)){
    principal.position.x = principal.position.x +8
  }
  if(keyIsDown(40)){
    principal.position.y = principal.position.y +8
  }

  //Se cansar:
}

//function camera(){
  //camera.position.y = principal.position.y
  //camera.position.x = principal.position.x
//}
