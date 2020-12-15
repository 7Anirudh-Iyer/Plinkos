const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,plink
var particles=[]
plinkos=[]

function setup(){
    var canvas = createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;  
    
    b1=new wall(240,600,480,10)
    b2=new wall(0,450,10,300)
    b3=new wall(480,450,10,300)

    b4=new wall(80,450,5,300)
    b5=new wall(160,450,5,300)
    b6=new wall(240,450,5,300)
    b7=new wall(320,450,5,300)
    b8=new wall(400,450,5,300)

    for(var i=50; i<800;i=i+50){
        plinkos.push(new plinko(i,80))
        plinkos.push(new plinko(i+20,130))
        plinkos.push(new plinko(i,180))
        plinkos.push(new plinko(i+20,230))
    }

}

function draw(){
    background(0);
    Engine.update(engine);  

    b1.display()
    b2.display()
    b3.display()

    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()

    if(frameCount%10===0){
        particles.push(new player(random(50,550),0))
    }

    for(var i=0; i<particles.length; i++){
        particles[i].display()
    }

    for(var i=0;i<plinkos.length;i++){
        plinkos[i].display()
    }

}



