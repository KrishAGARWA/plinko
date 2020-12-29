
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos=[]
var particles=[]


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
for(var j =40;j<900;j=j+50){

	plinkos.push(new Pp(j,75,40))
}
console.log(plinkos)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



for(var j=0;j<plinkos.lenght;j++){ 
	plinkos[j].display();
	}


  drawSprites();
 
}



