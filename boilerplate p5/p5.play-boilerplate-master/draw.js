function draw() {
  background("black");
  createEdgeSprites();
  if (wall.x)
    car.x < (car.width * wall.width) / 2; {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if (deformation > 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation > 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();

}
