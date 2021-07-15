const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;
var engine, world;


function preload() {
  
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

   ground1 = new Ground(300,380,300,10);

   block1 = new Block(200,340,30,40);
   block2 = new Block(230,340,30,40);
   block3 = new Block(260,340,30,40);
   block4 = new Block(290,340,30,40);
   block5 = new Block(320,340,30,40);
   block6 = new Block(350,340,30,40);
   block7 = new Block(380,340,30,40);
  
   block8 = new Block2(230,300,30,40);
   block9 = new Block2(260,300,30,40);
   block10 = new Block2(290,300,30,40);
   block11 = new Block2(320,300,30,40);
   block12 = new Block2(350,300,30,40);
 
   block13 = new Block3(260,260,30,40);
   block14 = new Block3(290,260,30,40);
   block15 = new Block3(320,260,30,40);
 
   block16 = new Block(290,220,30,40);
   //=========================================

    ground2 = new Ground(600,270,220,10);

    block17 = new Block2(540,240,30,40);
    block18 = new Block2(570,240,30,40);
    block19 = new Block2(600,240,30,40);
    block20 = new Block2(630,240,30,40);
    block21 = new Block2(660,240,30,40);
 
    block22 = new Block3(570,200,30,40);
    block23 = new Block3(600,200,30,40);
    block24 = new Block3(630,200,30,40);
 
    block25 = new Block(600,170,30,40);

    hexagon = new Hexagon(100,200,20);
    slingshot = new SlingShot(hexagon.body,{x:100,y:250});
}

function draw(){
    background(200);
    Engine.update(engine);

   
    ground1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    //:::::::::::::::::::::::::::::::::::::::::::

    ground2.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    hexagon.display();
    slingshot.display();
}
function mouseDragged()
{
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
   slingshot.fly();


}
