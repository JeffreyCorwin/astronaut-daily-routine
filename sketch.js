
var astronaut, bath, brush, drink, eat, gym, iss, move, sleep, bg,edges;

function preload(){
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadImage("brush.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  iss = loadImage("iss.png");
  move = loadAnimation("move3.png", "move4.png");
  sleep = loadImage("sleepingAstronaut.png");
}

function setup() {
  createCanvas(800,400);

  bg = createSprite(width/2, height/2);
  bg.addImage("InterNationalSpaceStation",iss);
  bg.scale = 0.15;

  astronaut = createSprite(width/2, 250, 50, 50);
  astronaut.addImage("bathing",sleep);  
  astronaut.scale = 0.07;

  edges=createEdgeSprites();
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  fill("white");
  textSize(10);
  text("Instructions:",40, 20);
  text("up arrow =  brush",40, 30);
  text("down arrow = gym",40, 40);
  text("left arrow = eat",40,50);
  text("right arrow = bath",40,60);
  text("m key = move",40, 70);
  text("space = sleep",40,80)

  astronaut.bounceOff(edges);

   if(keyDown("UP_ARROW")){
    astronaut.addImage("bathing",brush);
    astronaut.y = 300;
    astronaut.x = 370;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("bathing",gym);
    astronaut.y = 300;
    astronaut.x = 370;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  } 

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",eat);
    astronaut.y = 280;
    astronaut.x = 200;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.y = 300;
    astronaut.x = 370;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyWentUp("m")){
    astronaut.addAnimation("bathing",move);
    astronaut.x = 350;
    astronaut.y = 300;
    astronaut.velocityY = -1;
    astronaut.velocityX = 1;
  }

  if(keyDown("space")){
    astronaut.addImage("bathing",sleep);
    astronaut.y = 250;
    astronaut.x = 370;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
}

  