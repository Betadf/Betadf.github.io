var img;
function preload(){
 img=loadImage("v.jpg");
}
 
function setup() { 
  createCanvas(1000, 1000);
} 
 
function draw() { 
  background(220);
  imageMode(CENTER);
  image(img,400,300);
}

