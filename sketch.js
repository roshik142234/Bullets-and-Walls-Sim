var bullet, wall, road, thickness;

var speed, weight;



function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(100, 200, 30, 15);
  bullet.velocityX = speed;
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80)
  road = createSprite(720, 200, 1440, 200);
  road.shapeColor = color(0);
  
  
}

function draw() {
  background(21, 114, 73);  

  bullet.depth = road.depth+1;
  wall.depth = bullet.depth;

  

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    bullet.x = wall.x - thickness/2-15;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10) {
      bullet.shapeColor = color(255,0,0);
    }
    if (damage<10) {
      bullet.shapeColor= color(0,255,0);
    }

  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRE = lbullet.x+lbullet.width;
  wallLE = lwall.x
  if (bulletRE>=wallLE) {
    return true;
  }
  return false;
}