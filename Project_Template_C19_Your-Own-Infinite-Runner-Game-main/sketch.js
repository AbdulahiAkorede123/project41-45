var Car
var CarImage
var raceTrack
var raceTrackImage



function preload() {
CarImage = loadImage("PC2.png");
raceTrackImage= loadImage("racetreck.webp");
}

function setup() {
    createCanvas(windowWidth,windowHeight)
    Car = createSprite(width/2,height-50)
    Car.addImage("racecar",CarImage)
       Car.scale= 0.2
    }
 

function draw() {
 drawSprites()
}
