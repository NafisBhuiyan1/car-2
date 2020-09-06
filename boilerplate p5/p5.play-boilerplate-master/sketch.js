var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(20,52)
  thickness = random(22,100)
  bullet = createSprite(50,200,50,50)
  wall = createSprite(1500,200,thickness,200)
  bullet.velocityX = speed;
  bullet.shapeColor = "White"
}

function draw() {
  background("black");  
  createEdgeSprites();
  // if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  //   bullet.velocityX=speed;
  //   var deformation=0.5 * weight * speed* speed/22509;
  //   if(deformation>180){
  //     bullet.shapeColor=color(255,0,0)
  //   }
  //   if(deformation>180 && deformation>100){
  //     bullet.shapeColor=color(230,230,0)
  //     }
  //     if(deformation>100){
  //       bullet.shapeColor=color(0,255,0)
  //       }
 
  if (hasCollided(bullet, wall)){
    bullet.velocityX=0
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  

  drawSprites();

}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width/2;
  wallLeftEdge=lwall.x-lwall.width/2;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}