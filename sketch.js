const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2,base3,BASE4;

var boxO1,boxO2,boxO3,boxO4,boxO5,boxO6,boxO7,boxO8,boxO9;
var boxB1,boxB2,boxB3,boxB4,boxB5,boxB6;
var boxY1,boxY2,boxY3,boxY4,boxY5,boxY6,boxY7,boxY8;
var boxR1,boxR2,boxR3,boxR4,boxR5,boxR6,boxR7;

var chain1,chain2,chain3;

var striker1,striker2,striker3;

function setup() {
  var canvas = createCanvas(1600,750);
  engine = Engine.create();
  world = engine.world;

  BASE4 = new Base(800,750,1600,100)

  //BASE 1
  base1 = new Base(900,400,200,10);

  boxO1 = new BoxO(855,375,30,40);
  boxO2 = new BoxO(885,375,30,40);
  boxO3 = new BoxO(915,375,30,40);
  boxO4 = new BoxO(945,375,30,40);

  boxY1 = new BoxY(870,335,30,40);
  boxY2 = new BoxY(900,335,30,40);
  boxY3 = new BoxY(930,335,30,40);

  boxB1 = new BoxB(885,295,30,40);
  boxB2 = new BoxB(915,295,30,40);

  boxR1 = new BoxR(900,255,30,40); 

  striker1 = new Striker(550,250,50,50);

  chain1 = new Chain(striker1.body,{x:550, y:200});

  //BASE 2
  base2 = new Base(1200,250,200,10);

  boxY4 = new BoxY(1155,225,30,40);
  boxY5 = new BoxY(1185,225,30,40);
  boxY6 = new BoxY(1215,225,30,40);
  boxY7 = new BoxY(1245,225,30,40);

  boxO5 = new BoxO(1170,185,30,40);
  boxO6 = new BoxO(1200,185,30,40);
  boxO7 = new BoxO(1230,185,30,40);

  boxR2 = new BoxR(1185,145,30,40);
  boxR3 = new BoxR(1215,145,30,40);

  boxB3 = new BoxB(1200,105,30,40);

  striker2 = new Striker(850,85,50,50);

  chain2 = new Chain(striker2.body,{x:850,y:35});

  //BASE 3
  base3 = new Base(1200,550,200,10);

  boxR4 = new BoxR(1155,525,30,40);
  boxR5 = new BoxR(1185,525,30,40);
  boxR6 = new BoxR(1215,525,30,40);
  boxR7 = new BoxR(1245,525,30,40);

  boxB4 = new BoxB(1170,485,30,40);
  boxB5 = new BoxB(1200,485,30,40);
  boxB6 = new BoxB(1230,485,30,40);

  boxO8 = new BoxO(1185,445,30,40);
  boxO9 = new BoxO(1215,445,30,40);

  boxY8 = new BoxY(1200,405,30,40);

  striker3 = new Striker(850,480,50,50);

  chain3 = new Chain(striker3.body,{x:850,y:430});

}

function draw() {
  background("white");
  Engine.update(engine);

  BASE4.display();

  //BASE 1
  base1.display();

  boxO1.display();
  boxO2.display();
  boxO3.display();
  boxO4.display();

  boxY1.display();
  boxY2.display();
  boxY3.display();

  boxB1.display();
  boxB2.display();

  boxR1.display();

  chain1.display();

  striker1.display();

  //BASE 2 
  base2.display();

  boxY4.display();
  boxY5.display();
  boxY6.display();
  boxY7.display();

  boxO5.display();
  boxO6.display();
  boxO7.display();

  boxR2.display();
  boxR3.display();

  boxB3.display();

  chain2.display();

  striker2.display();

  //BASE 3
  base3.display();

  boxR4.display();
  boxR5.display();
  boxR6.display();
  boxR7.display();

  boxB4.display();
  boxB5.display();
  boxB6.display();

  boxO8.display();
  boxO9.display();

  boxY8.display();

  chain3.display();

  striker3.display();
}
function mouseDragged(){
  Matter.Body.setPosition(striker3.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain3.fly();
}