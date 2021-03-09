var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
let particles = [];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState = 0;

var box;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }  

    // box = createSprite(400, 600, width, 20);    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

//   if(frameCount%100===0){
//    particles.push(new Particle(random(width/2-60, width/2+60), 10,10)); 
//  }  
 
//   for (var j = 0; j < particles.length; j++) {
   
//      particles[j].display();
//    }

//    if(particles.x < 600 && particles.y >600){
//      score = score+100;
//    }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  // if(particles.x.position <600 && particles.y.position > 600){
  //   score += 100;
  //  }
  mousePressed();
  // drawSprites();

}

function mousePressed(){
  if(gameState !== "end"){
    particle = new Particle(mouseX, mouseY, 10, 10);
  // particles.push(b)
  }
}