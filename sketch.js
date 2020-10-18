var fixedBlock, movingBlock;

function setup() {
  createCanvas(800,400);
  
  fixedBlock = createSprite(400, 200, 50, 50);
  movingBlock = createSprite(200, 200, 50, 50);
}


function draw() {
  background(255,255,255);  

  movingBlock.x = mouseX;
  movingBlock.y = mouseY;

  if( fixedBlock.x - movingBlock.x < fixedBlock.width/2 + movingBlock.width/2 &&
    movingBlock.x - fixedBlock.x < fixedBlock.width/2 + movingBlock.width/2 &&
    fixedBlock.y - movingBlock.y < fixedBlock.height/2 + movingBlock.height/2 &&
    movingBlock.y - fixedBlock.y < fixedBlock.height/2 + movingBlock.height/2  ){
    fixedBlock.shapeColor = "yellow";
    movingBlock.shapeColor = "yellow";
  }else{
    fixedBlock.shapeColor = "red";
    movingBlock.shapeColor = "red";
  }
  drawSprites();
}