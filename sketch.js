var forest, forest_jpg,snake,snake_jpg;

function preload(){
forest_jpg=loadImage("forest3.jpg");
snake_jpg=loadImage("snake 3.png");
}


function setup(){
createCanvas(1200,700);
forest=createSprite(0,250);
forest.velocityX=5;
forest.addImage(forest_jpg);
snakeGroup=new Group();


}

function draw(){
background("grey");
forest.velocityX=5;
if(forest.x>1200){
    forest.x=forest.width/8;
}

snakes();
drawSprites();
}
function snakes(){
    if(frameCount%200==0){
    var snake=createSprite(350,550,100,100);
    snake.x=Math.round(random(350,800))
    snake.addImage(snake_jpg);
    snake.scale=0.4;
    
    snake.velocityX=2;
    snakeGroup.add(snake);
    }
    
}