var tilesGroup;
var player
var p1, p2, p3, p4, p5, p6;

var selector;

function setup(){
  createCanvas(1240, 740);
  player =createSprite(151, 151, 20, 20);
  player.shapeColor = "red";
  player.depth = 2;



  selector = createSprite(100, 100, 20, 20);
  selector.shapeColor="blue"
  selector.depth =3;

  p1 = createSprite(151, 101, 20, 20);
  p1.shapeColor = "white";
  p1.depth = 2;

  p2 = createSprite(201, 151, 20, 20);
  p2.shapeColor = "white";
  p2.depth = 2;

  p3 = createSprite(101, 151, 20, 20);
  p3.shapeColor = "white";
  p3.depth = 2;

  p4 = createSprite(201, 201, 20, 20);
  p4.shapeColor = "white";
  p4.depth = 2;

  p5 = createSprite(101, 201, 20, 20);
  p5.shapeColor = "white";
  p5.depth = 2;

  p6 = createSprite(151, 251, 20, 20);
  p6.shapeColor = "white";
  p6.depth = 2;


  

}
function draw() {
  background(0);
  selector.x = mouseX;
  selector.y = mouseY;

  //console.log(mouseX, mouseY);

  if(mousePressedOver(p1)) {
    console.log("click worked");
  }

  
  
  playerControls(player);
  drawSprites();
  createTiles();
 
  
}



function playerControls(sprite){
  if (keyIsDown(RIGHT_ARROW)){
    sprite.position.x += 50;
  }
  
  if (selector.overlap(player))
  sprite.x += 50;
}

  if (keyIsDown(DOWN_ARROW)){
    sprite.position.y += 50;
  }
    
  if (keyIsDown(LEFT_ARROW)){
    sprite.position.x += -50;
  }
  if (keyIsDown(UP_ARROW)){
    sprite.position.x += -50;
  }


function createTiles(){
  for(var j =0; j<10; j++){
    // j --> column
    for(var i =0; i<20; i++){
      // i -->  row
      var tile = createSprite(100+(i*52), 100+(j*52), 50, 50);
      tile.depth =1;

    }
  }
}

