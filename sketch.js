var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3,gameObject4;
function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(20, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(100,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  gameObject1 = createSprite( 50, 200, 20, 20);
  gameObject1.shapeColor = "red";
  
  gameObject2 = createSprite( 150, 200, 20, 20);
  gameObject2.shapeColor = "red";

  gameObject3 = createSprite( 250, 200, 20, 20);
  gameObject3.shapeColor = "red";
  
  gameObject4 = createSprite( 350, 200, 20, 20);
  gameObject4.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
 }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "red"; 
  }
  drawSprites();
}

function isTouching(object1, object2){ 

  if (object1.x - object2.x < object2.width/2 + object1.width/2&& object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
 }
  else {
   return false;
  }


} 