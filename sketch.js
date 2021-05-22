var moving,fixed
function setup() {
  createCanvas(800,400);
 moving =  createSprite(400, 200, 50, 50);
 fixed = createSprite(500,200,30,30);
}
function draw() {
  background("black");  
  drawSprites();
}