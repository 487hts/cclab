/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new ElaineDancer(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display(); 
  
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ElaineDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.spdx = -2;
    this.spdy = -20;
    this.accy = 1;
    this.sl = 50;
    // this.slh = 120;
    // this.slv = 120;
    this.sls = 0.2;
    //this.d = this.sl*4/25;
    
  }  
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    
    if (this.spdy == -20){
        this.spdx = -this.spdx;
        this.spdy = -this.spdy;
        
      }  
    this.x = this.x - this.spdx;
    this.spdy = this.spdy - 1;
    this.y = this.y - this.spdy;
    this.sl = this.sl + this.sls;
    if(this.sl >= 120){
      this.sls = 0;
    } 
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    
    // ******** //
    // ⬇️ draw your dancer here ⬇️
    fill(210,69,66);
    rect(-this.sl/2,100-this.sl,this.sl);
    fill(200,108,114);
    circle(-this.sl/2+this.sl/6,100-this.sl/6,this.sl*4/25);
    circle(-this.sl/2+this.sl*5/6,100-this.sl/6,this.sl*4/25);
    fill(143,181,169);
    push();
    translate(cos(radians(135))*this.sl/3,100-this.sl-sin(radians(135))*this.sl/3);
      rotate(radians(-45));
      ellipse(0,0,this.sl/3,this.sl*2/3);
    pop();
    push();
    translate(cos(radians(75))*this.sl/3,100-this.sl-sin(radians(75))*this.sl/3);
      rotate(radians(15));
      ellipse(0,0,this.sl/3,this.sl*2/3);
    pop();
    // ⬆️ draw your dancer here ⬆️
    
    
    
    
    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()
   
    
    
    pop();
  }  
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
  
  
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/