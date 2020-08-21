const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella;
var maxDrops = 10;
var drops = [];

function preload(){
    
}



function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,800);
    
    umbrella = new Umbrella(20,520,15);
}

function draw(){
    Engine.update(engine);
    background("#0E3652");
    umbrella.display();

    for(var i=0; i < maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,300),4));
    }

    for(var i = 0; i < drops.length; i++)
    {
        drops[i].display();
    }

}   

