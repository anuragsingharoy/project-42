var iss, spacecraft, bg, issImg, ScImg1, ScImg2, ScImg3, ScImg4
var hasDocked = false

function setup() {
  createCanvas(600,350);
  
  spacecraft = createSprite(285, 240, 50, 50);
  spacecraft.addImage(ScImg1)
  spacecraft.scale = 0.15
  
  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale = 0.25
}
function draw() {
  background(bg); 
  spacecraft.addImage(ScImg1)
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
  
  if(keyDown("up")){
spacecraft.y = spacecraft.y-2
  }
  if(keyDown("left")){
    spacecraft.x = spacecraft.x-1
      }
      if(keyDown("right")){
        spacecraft.addImage(ScImg2)
        spacecraft.x = spacecraft.x+1
          }
          if(keyDown("down")){
           spacecraft.addImage(ScImg1)
              }
            }
            if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
              hasDocked = true;
              textSize(25)
              fill("white")
              text("docking successful",200,300)
            }
  drawSprites();
}

function preload() {
bg = loadImage("spacebg.jpg")
ScImg1 = loadImage("spacecraft1.png")
ScImg2 = loadImage("spacecraft2.png")
ScImg3 = loadImage("spacecraft3.png")
issImg = loadImage("iss.png")
ScImg4 = loadImage("spacecraft4.png")
}