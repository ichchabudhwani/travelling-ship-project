var ship;
var seaimage;
Image;
 function preload(){
 shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 seaimage=loadImage("sea.png")
}
function setup(){ 
createCanvas(600,600);
 
// creating sea
sea = createSprite(600,300);
sea.addImage(seaimage);
sea.scale= 0.5;
sea.velocityX=-10;
sea.x=sea.height/2;

// creating ship
 
ship = createSprite(100,400,20,50);
ship.addAnimation("running",shipImg);

//to reduce the size of the ship and sea
         

ship.scale =0.25;


}
 
function draw (){
       
background("lightblue");


if (keyDown("enter")) {
    ship.velocityX = 5;    
}
if (keyDown("left")) {
    ship.velocityX = -5;     
}
if (keyDown("space")) {
ship.velocityX = 0;    
}
if (sea.x<0){
    sea.x=sea.height/2;
} 

drawSprites();
}
