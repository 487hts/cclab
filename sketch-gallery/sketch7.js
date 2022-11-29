let petols = [],
  aNewPetol,
  fireworks = [],
  aNewFirework;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  text("click first, then press keys to add petols",30,10);
  noStroke();
  rect(0,400,width,height-400);
  for (let j = 0; j < fireworks.length; j++) {
    fireworks[j].act();
    fireworks[j].draw();
  }
  for (let i = 0; i < petols.length; i++) {
    noStroke();
    petols[i].act();
    petols[i].draw();
  }
}
class Sakura {
  constructor() {
    this.ea = random(15, 20);
    this.eb = random(7, 14);
    this.chance = random(0, 2);
    if (this.chance >= 0 && this.chance <= 1) {
      this.px = random(0, width);
      this.py = 0;
      this.pyd = height;
    } else {
      this.px = 0;
      this.py = random(0, width);
      this.pyd = height - this.py;
    }
    this.pr = random(220, 255);
    this.pg = random(90, 120);
    this.pb = random(140, 180);
    this.prd = 0;
    this.pgd = 0;
    this.pbd = 0;
    this.pangle = 45;
    this.ys = random(-random(0, 1), random(1, 11));
    this.xs = random(-random(0, 1), random(1, 11));
  }
  draw() {
    push();
    translate(this.px, this.py);
      rotate(radians(this.pangle));
      fill(this.pr, this.pg, this.pb);
      ellipse(0, 0, this.ea, this.eb);
    pop();
    push();
    translate(this.px,this.pyd);
      rotate(radians(this.pangle));
      fill(this.prd, this.pgd, this.pbd);
      ellipse(0, 0, this.ea, this.eb);
    pop();
    
  }
  act() {
    if (this.py >= 400){
      this.pr = 0;
      this.pg = 0;
      this.pb = 0;
    }
    if (this.pyd<=400){
      this.prd = random(220, 255);
      this.pgd = random(90, 120);
      this.pbd = random(140, 180);
    }
    this.px += random(-random(0, 1), random(1, 11));
    this.py += random(-random(0, 1), random(1, 11));
    this.pxd += random(-random(0, 1), random(1, 11));
    this.pyd += -random(-random(0, 1), random(1, 11));
    this.pangle += random(5, 10);
  }
}
class Firework {
  constructor(originX, originY) {
    this.fx = originX;
    this.fy = originY;
    this.fa = 0;
    this.br = 0;
    this.brs = 1;
    this.r = 0;
    //this.rs = 1;
  }
  draw() {
    push();
    translate(this.fx, this.fy);
    for (let m = 0; m < 36; m++) {
      this.fa = m * 10;
      strokeWeight(3);
      if(this.fy<=400){
        stroke(random(220, 225), random(220, 225),random(150,220));
      }else{
        stroke(random(35, 45), random(35, 45),random(35,45));
      }
     line(0,0,
         this.r * cos(radians(this.fa)),
         this.r * sin(radians(this.fa))
        );
      strokeWeight(5);
      if(this.fy<=400){
        stroke(0);
      }else{
        stroke(300);
      }
      line(0,0,
         this.br * cos(radians(this.fa)),
         this.br * sin(radians(this.fa))
        );
    }
    pop();
  }
  act(){
    if(this.r<50){
      this.r += 1;
    }else{
      this.r = 50;
      this.br += 1;
      if (this.br>=50){
        this.br = 50;
      }
    }
  }
}

function keyPressed() {
  for (let t = 0; t <= 5; t++) {
    aNewPetol = new Sakura();
    petols.push(aNewPetol);
  }
  if (petols.length >= 200) {
    petols.splice(0, 5);
  }
}
function mousePressed() {
  if ((mouseY>=0 && mouseY<350)||(mouseY>450&&mouseY<height)){
    aNewFirework = new Firework(mouseX, mouseY);
    fireworks.push(aNewFirework);
    if (fireworks.length > 10) {
      fireworks.splice(0, 1);
    }
  }
}
//Blog Link: https://wp.nyu.edu/nyushanghai-elaine_5026/2022/10/30/particles-petols-firework/