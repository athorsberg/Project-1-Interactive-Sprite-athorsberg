/**
 * Project 1 - Interactive Image;
 * Name: Amanda Thorsberg; June 25, 2023;
 * Comments: This image is of a hot air balloon that changes scale as the user move the mouse vertically up and down the screen. This gives the illusion of it flying away. Additionally, when the mouse is pressed, the background will turn from a light blue to a dark blue symbolising day to night. The hot air balloon will also disappear and be replaced with the image of a shooting star. But, the words on the balloon will remain and change to a bright neon color. This image should still change in scale when the mouse is moved.;
 *citations: 
McCarthy, Lauren, et al. Getting Started with P5.Js: Making
  Interactive Graphics in JavaScript and Processing. Maker
  Media, Inc., 2016. 
Shiffman, Daniel, director. YouTube, YouTube, 17 July 2015, 
  https://www.youtube.com/watch?v=UvSjtiW-RH8. Accessed 25 June 
  2023. 
 */

// Global Variables go here
var newWidth = 300; //horizontal location
var newHeight = 300; //vertical location 
var s = 1; //scale

function setup(){
  // this function will run once
  createCanvas(600, 600); //create a 600x600 pixel drawing canvas
  translate(newWidth, newHeight); //new origin of image
  textFont("Georgia"); //font for all text
}

function draw(){
  // this function runs again and again (60x per second)
  background(137, 207, 240); //light blue sky background
  s = mouseY/height; // scale determined by y position
  scale(s); //apply variable
  //add image code here
  //my shape
  strokeWeight(2); //balloon boarder thickness
  stroke(66, 42, 28); //brown colored boarder lines
  fill(255, 0, 0); // red color
  ellipse(300, 200, 200, 220); //balloon shape
  fill(0, 0, 255); //blue color
  triangle(300, 200, 300, 310, 200, 200); // balloon decor 1
  fill(0, 255, 0); //green color
  triangle(300, 200, 400, 200, 300, 90); // balloon decor 2
  strokeWeight(4); //rope 1 thickness
  line(240, 290, 240, 420); //rope 1
  strokeWeight(4); //rope 2 thickness
  line(300, 310, 300, 420); //rope 2
  strokeWeight(4); //rope 3 thickness
  line(360, 290, 360, 420); //rope 3
  strokeWeight(2); // basket boarder thickness
  fill(80, 0, 80); //purple color
  rect(220, 420, 160, 120); //basket
  fill(255, 195, 11); //gold-yellow color
  triangle(220, 420, 380, 420, 220, 540); //basket decor 1
  strokeWeight(8); // basket text thickness
  textSize(28); //font size of basket text
  fill(177, 156, 217); //light purple color
  text("FLY", 245, 465); //basket word 1
  fill(239, 253, 95); //light yellow color
  text("HIGH", 290, 520);//basket word 2
  strokeWeight(4);//balloon text thickness
  textSize(22);//font size of balloon text
/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do this
    mousePressed(); //activate function
    strokeWeight(5); //shooting star thickness
    stroke(255, 240, 31); //gold-yellow color
    line(340, 140, 360, 160); //shooting star line 1
    line(340, 140, 320, 160); //shooting star line 2
    line(360, 160, 380, 170); //shooting star line 3
    line(320, 160, 300, 170); //shooting star line 4
    line(380, 170, 360, 180); //shooting star line 5
    line(300, 170, 320, 180); //shooting star line 6
    line(320, 180, 310, 200); //shooting star line 7
    line(360, 180, 370, 200); //shooting star line 8
    line(310, 200, 340, 180); //shooting star line 9
    line(370, 200, 340, 180); //shooting star line 10
    line(330, 190, 330, 210); //shooting star line 11
    line(350, 190, 350, 210); //shooting star line 12
    line(350, 210, 340, 200); //shooting star line 13
    line(330, 210, 340, 200); //shooting star line 14
    fill(255, 240, 31);//neon yellow color
    stroke(66, 42, 28); //brown outline
  } else {
    //do something here is the mouse is NOT pressed
    fill(4, 5, 86); //dark blue color
    strokeWeight(1);//balloon words thickness
    stroke(4, 5, 86); //dark blue outline
  }
  text("UP,",235, 150)//balloon word 1
  text("UP...",235, 175)//balloon word 2
  text("...AND", 305, 235);//balloon word 3
  text("AWAY!", 305, 265);//balloon word 4
}
/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
// add code here that will execute once each time the mouse is pressed
function mousePressed(){
    background(4, 5, 86); //background is changed to dark blue
  }

  
