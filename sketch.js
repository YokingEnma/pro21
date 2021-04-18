var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1365,650);

    block1 = createSprite(221,630,240,30);
    block1.shapeColor = "blue";

    block2 = createSprite(811,630,240,30);
    block2.shapeColor = "orange";

    block3 = createSprite(501,630,240,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(1091,630,240,30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=35;
     ball.velocityY=15;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        music.play();
    }


    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    drawSprites();
}
