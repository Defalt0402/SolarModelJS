var AU = 1.496 * (10**8) * 1000;
var G = 6.67428 * (10**-11);
var SCALE_DISTANCE = 250 / AU; //1AU = 100 pixels
var SCALE_TIME = 3600*24; //1 day
var WIDTH = 800;
var HEIGHT = 800;

var sun = new Planet(0, 0, 30, [255, 255, 0], 1.98892 * 10**30, 1);
sun.sun = true;
var earth = new Planet(-1 * AU, 0, 16, [0, 30, 255], 5.9742 * 10**24, 2);
earth.y_vel = 29.783 * 1000;
var mars = new Planet(-1.524 * AU, 0, 12, [255, 10, 10], 6.39 * 10**23, 3);
mars.y_vel = 24.077 * 1000;
var mercury = new Planet(0.387 * AU, 0, 8, [30, 30, 30], 3.30 * 10**23, 4);
mercury.y_vel = -47.4 * 1000;
var venus = new Planet(0.723 * AU, 0, 14, [255, 255, 255], 4.8685 * 10**24, 5);
venus.y_vel = -35.02 * 1000;

var bodies = [sun, earth, mars, mercury, venus];

function setup(){
  createCanvas(WIDTH, HEIGHT);
  background(100);
}

function draw(){
  background(100);
  for (planet of bodies) {
    planet.drawPlanet();
		planet.update(bodies);
  }
}
