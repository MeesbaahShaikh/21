var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,fixedRect))
 {
   movingRect.shapeColor="red";
   fixedRect.shapeColor="red;"
 }
 else
 {
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green;"
 }
  drawSprites();
}

function isTouching(object1,object2)
{

  if (object1.x - obecjt2.x < obecjt2.width/2 + object1.width/2
    && obecjt2.x - object1.x < obecjt2.width/2 + object1.width/2
    && object1.y - obecjt2.y < obecjt2.height/2 + object1.height/2
    && obecjt2.y - object1.y < obecjt2.height/2 + object1.height/2) {

   return true;
}
else {
return false;
}

}