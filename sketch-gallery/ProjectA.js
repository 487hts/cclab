let glass,
  cubes = [],
  aNewCube,
  thisx = 130,
  thisy = 280,
  micros = [],
  aNewMicro,
  boolean = false,
  mouseP = false,
  mdb = false,
  mxs = [],
  mys = [],
  aNewBubble,
  bubbles = [],
  mouseB = false,
  mouseBB = true,
  rd,
  rt;
function setup() {
  createCanvas(windowWidth, windowHeight);
  glass = new Glass(width / 2, height / 2);
}

function draw() {
  drawBase();
  underMicro();
}
class Glass {
  constructor(originX, originY) {
    this.ox = originX;
    this.oy = originY;
    this.byhd = 0.1;
    this.glassX = thisx;
    this.glassY = thisy;
    this.diai = 0.1;
    this.diaii = 0.2;
    this.t = 255;
  }
  draw() {
    push();
    translate(this.ox, this.oy);
    noStroke();
    fill(255);
    for (let j = 0; j < this.glassY * 2; j++) {
      rect(-this.glassX, j - this.glassY, this.byhd, this.byhd, 3);
      rect(this.glassX, j - this.glassY, this.byhd, this.byhd, 3);
      this.byhd = 5.5 - (j + 10) * 0.008;
    }
    fill(0);
    rectMode(CENTER);
    rect(-this.glassX + 0.1, -this.glassY + 0.1, 6, 6);
    rect(this.glassX + 0.1, -this.glassY + 0.1, 6, 6);

    //top
    noFill();
    stroke(255, 255, 255, this.t);
    strokeWeight(2);
    arc(
      0,
      -this.glassY,
      2 * this.glassX,
      this.glassY / 20,
      (PI * 78.5) / 80,
      PI + PI / 20
    );
    arc(
      0,
      -this.glassY,
      2 * this.glassX,
      this.glassY / 20,
      (-PI * 3) / 4,
      (PI * 2) / 3
    );

    //buttom
    fill(255, 255, 255, this.t);
    ellipse(0, this.glassY - 5, 2 * this.glassX - 30, (this.glassY * 3) / 28);
    noFill();
    stroke(255, 255, 255, this.t);
    strokeWeight(3);
    arc(0, this.glassY, 2 * this.glassX, this.glassY / 7, 0, PI);
    arc(
      0,
      this.glassY - 5,
      2 * this.glassX,
      this.glassY / 6,
      (-PI * 2) / 3,
      -PI / 30
    );

    //water surface
    fill(255, 255, 255, this.t);
    noStroke();
    ellipse(
      this.glassX / 3,
      -this.glassY / 3,
      (this.glassX * 4) / 3,
      this.glassY / 14
    );
    ellipse(
      -this.glassX / 3,
      -this.glassY / 3,
      (this.glassX * 4) / 3,
      this.glassY / 14
    );
    fill(0);
    ellipse(
      -this.glassX / 12,
      -this.glassY / 3,
      (this.glassX * 5) / 3,
      this.glassY / 14
    );

    //lights reflecting
    fill(255, 255, 255, this.t);
    for (let i = 0; i < this.glassY / 4; i++) {
      circle((this.glassX * 3) / 4, (this.glassY * 3) / 5 - i, this.diai);
      this.diai = (i + 10) * 0.05;
    }
    for (let m = 0; m < (this.glassY * 2) / 5; m++) {
      circle((this.glassX * 3) / 4, m - (this.glassY * 47) / 48, this.diaii);
      this.diaii = ((this.glassY * 2) / 5 - m) * 0.04;
    }
    pop();
  }
  act() {
    //zoom innnnnnn
    if (this.cboolean) {
      this.t += -1;
      console.log(this.cboolean);
    }
  }
}
class Cube {
  constructor(ocx, ocy) {
    this.cx = ocx;
    this.cy = ocy;
    this.d = (thisx / 13) * 5;
    this.cys = 0;
    this.cya = 0.5;
    this.a = 0;
    this.as = 1;
    this.cboolean = false;
    this.ct = 220;
  }
  draw() {
    noStroke();
    fill(255, 255, 255, this.ct);
    push();
    translate(this.cx, this.cy);
    rectMode(CENTER);
    // rotate(radians(this.a));
    rect(0, 0, this.d, this.d);
    pop();
  }
  act() {
    if (this.cy > height / 2 - thisy / 3 && this.cy < height / 2 + thisy - 5) {
      this.cys = 1.2;
      this.cya = 0.1;
    }
    if (this.cy >= height / 2 + thisy - 5 - ((thisx / 13) * 5) / 2) {
      this.cys = 0;
      this.cya = 0;
      this.cboolean = true;
      text("double click to look closer!!", width / 2 - 65, height / 2);
    }
    this.cys += this.cya;
    this.cy += this.cys;
  }
  dissolve() {
    if (this.d <= 0) {
      cubes.splice(0, 1);
    }
    this.ct += -0.02;
    this.d += -0.04;
  }
}
class Micro {
  constructor(mx, my, md, ma, mt, ms) {
    this.mx = mx;
    this.my = my;
    this.md = md;
    this.ma = ma;
    this.mt = mt;
    this.check = false;
    this.ms = ms;
    // this.dx = this.mx - width/2;
    // this.dy = this.my - height/2;
    // this.mk = this.dy/this.dx;
    // this.mm = random(-0.1,1);
  }
  draw() {
    // noStroke();
    // fill(255);
    // rect(0,0,width,height);
    stroke(255, 255, 255, this.mt);
    strokeWeight(this.ms);
    noFill();
    push();
    translate(this.mx, this.my);
    rectMode(CENTER);
    rotate(radians(this.ma));
    rect(0, 0, this.md, this.md, 3);
    pop();
  }
  act() {
    this.md += -0.1;
    this.mt += -0.2;
    if (this.md <= 0) {
      this.md = 0;
    }
    this.ma += 0.1;
    this.mx += random(random(-5, -1), random(1, 5));
    this.my += random(random(-5, -1), random(1, 5));
  }
  check() {
    if (
      (this.mx - this.md / 2) ^ (1 / 2 > width) ||
      this.my - this.md / 2 > height ||
      this.mx + this.md / 2 < 0 ||
      this.my + this.md / 2 < 0 ||
      this.mt <= 0
    ) {
      this.check = true;
    }
  }
}
class Bubble {
  constructor(bx, by) {
    this.bx = bx;
    this.by = by;
    this.bbb = false;
  }
  draw() {
    push();
    translate(this.bx, this.by);
    stroke(255);
    strokeWeight(0.5);
    noFill();
    circle(0, 0, 6);
    arc(0, 0, 5, 5, -PI / 3, -PI / 6);
    pop();
  }
  act() {
    this.bx += random(-1, 1);
    this.by += -1;
    if (this.by <= height / 2 - thisy / 3) {
      this.bbb = true;
    }
  }
}
function keyPressed() {
  //mouseB = false;
  aNewCube = new Cube(
    random(width / 2 - thisx + 50 / 2, width / 2 + thisx - 50 / 2),
    0
  );
  cubes.push(aNewCube);
  if (cubes.length > 3) {
    cubes.splice(0, 1);
  }
}
function doubleClicked() {
  boolean = true;
  mouseB = false;
  mouseP = false;
  if (micros.length != 0){
    micros.splice(0,micros.length);
  }
  for (let j = 0; j < 200; j++) {
    aNewMicro = new Micro(
      random(0, width),
      random(0, height),
      random(30, 90),
      random(0, 90),
      random(200, 220),
      random(5, 10)
    );
    micros.push(aNewMicro);
    for (let n = 0; n < j - 1; n++) {
      if (dist(micros[j].mx, micros[j].my, micros[n].mx, micros[n].my) <= 30) {
        j = j - 1;
        micros.splice(j - 1, 1);
      }
    }
  }
}
function mousePressed() {
  if (mouseX <= 55 && mouseY <= 20 && boolean) {
    mouseP = true;
  }
  if (mouseX <= 55 && mouseY >= 25 && mouseY <= 45 && boolean) {
    mouseB = true;
    boolean = false;
  }
}
function drawBase() {
  background(0);
  fill(0);
  rect(0, 0, width, height);
  fill(255);
  text("click first and press any key to add cubes", 20, 20);
  glass.act();
  glass.draw();
  for (let i = 0; i < cubes.length; i++) {
    cubes[i].act();
    cubes[i].dissolve();
    if (cubes.length != 0) {
      cubes[i].draw();
      mxs[i] = cubes[i].cx;
      mys[i] = cubes[i].cy;
      if (mys[i] >= height / 2 - thisy / 3) {
        if (frameCount % 90 == 0) {
          aNewBubble = new Bubble(
            mxs[i] + random(-cubes[i].d / 2, cubes[i].d / 2),
            mys[i] + random(-cubes[i].d / 2, cubes[i].d / 2)
          );
          bubbles.push(aNewBubble);
        }
        for (let why = 0; why < bubbles.length; why++) {
          bubbles[why].act();
          bubbles[why].draw();
        }
      }
    }
  }
  for (let b = 0; b < bubbles.length; b++) {
    if (bubbles[b].bbb) {
      bubbles.splice(b, 1);
      b = b - 1;
    }
  }
}
function underMicro() {
  if (boolean) {
    fill(0);
    rect(0, 0, width, height);
    if (mouseP) {
      for (let m = 0; m < micros.length; m++) {
        micros[m].act();
        if (micros[m].check) {
          micros.splice(m, 1);
          m = m - 1;
        }
      }
    }
    if (mouseB) {
      // micros.splice(0, micros.length);
      // bubbles.splice(0,bubbles.length);
      drawBase();
    }
    for (let m = 0; m < micros.length; m++) {
      micros[m].draw();
    }
    noStroke();
    fill(255, 0, 0);
    rect(0, 0, 55, 20);
    rect(0, 25, 55, 20);
    fill(255);
    text("Dissolve", 5, 12);
    text("Back", 14, 40);
  }
}
