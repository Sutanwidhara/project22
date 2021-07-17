const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1,ball2,ball3,ball4,ball5,ball6;
var con1;
var con2;
var con3;
var con4;
var con5;
var con6;



//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(330,550,20);
	World.add(world,ball1);
	
	con1 = Constraint.create({
			pointA: {x:295,y:100},
			bodyB:ball1,
			PointB:{x:0,y:0},
			length:300,
			stiffness:1

		});
	World.add(world,con1);
	
	ball2 = Bodies.circle(360,550,20);
	World.add(world,ball2);
	
	con2 = Constraint.create({
			pointA: {x:330,y:100},
			bodyB:ball2,
			PointB:{x:0,y:0},
			length:300,
			stiffness:1
		})
	World.add(world,con2);
	
	ball3 = Bodies.circle(390,550,20);
	World.add(world,ball3);

	con3 = Constraint.create({
			pointA:{x:370,y:100},
			bodyB:ball3,
			PointB:{x:0,y:0},
			length:300,
			stiffness:1
	})
	World.add(world,con3);
	
	ball4 = Bodies.circle(420,550,20);
	World.add(world,ball4);

	con4 = Constraint.create({
		pointA:{x:410,y:100},
		bodyB:ball4,
		PointB:{x:0,y:0},
		length:300,
		stiffness:1
	})
	World.add(world,con4);

	ball5 = Bodies.circle(450,550,20);
	World.add(world,ball5);

	con5 = Constraint.create({
			pointA:{x:450,y:100},
			bodyB:ball5,
			PointB:{x:0,y:0},
			length:300,
			stiffness:1
	})
	World.add(world,con5);

	
	ball6 = Bodies.circle(480,550,20);
	World.add(world,ball6);

	con6 = Constraint.create({
		pointA:{x:490,y:100},
		bodyB:ball6,
		PointB:{x:0,y:0},
		length:300,
		stiffness:1
})
World.add(world,con6);
	
	
	ellipseMode(RADIUS);
	
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);	
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
  ellipse(ball6.position.x,ball6.position.y,20);
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	push()
strokeWeight(2);
stroke(255);
line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
line(con6.pointA.x,con6.pointA.y,ball6.position.x,ball6.position.y);
pop();
 
 
 
 
 
 
  //create ellipse shape for multiple bobs here
	
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
	{
		Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
	}


}