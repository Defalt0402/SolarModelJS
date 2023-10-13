var x = 10;
var y = 10;

function setup(){
  createCanvas(400, 400);
  background(100);
}

function draw(){
  background(100);
  fill(255);
  ellipse(x, y, 8, 8);
  x = (x + 5)%400;
  y = (y + 5)%400;
}
