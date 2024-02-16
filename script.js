/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Cambria");
}

function draw() {
  background(200);
  textSize(25);
  text("Life isn't about finding yourself.", 20, 60);
  
  
  if (mouseIsPressed) {
    textSize(40);
    text("It's about creating yourself.", 20, 160);
    } 
  }
