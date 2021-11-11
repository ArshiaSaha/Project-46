var spaceship, spaceshipImage;
var star, starImage, starGrp;
var obstacle, obstacleImage, obstacleGrp;

function preload(){
    backgroundImage = loadImage("space.jpg");
    spaceshipImage = loadImage("spaceship.png");
    starImage = loadImage("star.png");
    obstacleImage = loadImage("asteroid.png");
}

function setup() {
    createCanvas(1365, 625);
    
    spaceship = createSprite(650,420,50,20);
    spaceship.addImage("spaceship", spaceshipImage);
    spaceship.scale = 0.45;

    star = createSprite(520,120,20,20);
    star.addImage("star", starImage);
    star.scale = 0.35;
    star.velocityY = 2;

    obstacle = createSprite(120,200,30,30);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.55;
    obstacle.velocityY = 4;

  }

  function draw(){
      if(backgroundImage)
    background(backgroundImage);

    if(keyDown("up_arrow")){
      spaceship.y = spaceship.y-4;
    }

    if(keyDown("down_arrow")){
      spaceship.y = spaceship.y+4;
    }

    if(keyDown("left_arrow")){
      spaceship.x = spaceship.x-4;
    }

    if(keyDown("right_arrow")){
      spaceship.x = spaceship.x+4;
    }

      drawSprites();
  }