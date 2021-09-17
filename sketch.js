const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, base, playerArcher;
var baseimage,playerimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic:true
  };

  //create player base body
  base = Bodies.rectangle(200,350,180,150,options);
  World.add(world,base);

  //create player body
  player = Bodies.rectangle(250,base.position.y - 160,50,180,options);
  World.add(world,player);

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image (baseimage,base.position.x,base.position.y, 180,150);
  //show the playerbase image using image() function
  image(playerimage,player.position.x,player.position.y,50,180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
