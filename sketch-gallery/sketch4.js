let cn, st, R, pa, r, eb, ea, ha, rb, tha, h, a;
function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();
  fill(255);
  circle(width/2,height/2,40);
  for (i = 1; i <= 9; i++) {
    cn = random(6, 36);
    R = i * 50;
    for (j = 1; j <= cn; j++) {
      st = random(0, 4);
      pa = radians(360 / cn); //(width/2+R*cos(pa),height/2-R*sin(pa))
      a = pa * j;
      if (st >= 0 && st<1) {
        //circle
        r = random(5, 15);
        fill(random(40, 80), 60, 100);
        circle(
          width / 2 + (R + r) * cos(a),
          height / 2 - (R + r) * sin(a),
          2 * r
        );
      } else if (st < 2&& st>=1) {
        //ellipse
        eb = random(5, 15); ea = random(15, 25);
        fill(60, random(80, 120), 100);
        beginShape();
        vertex(width / 2 + R * cos(a), height / 2 - R * sin(a));
        vertex(
          width / 2 + (ea / 2 + R) * cos(a) + (eb / 2) * sin(a),
          height / 2 - (ea / 2 + R) * sin(a) + (eb / 2) * cos(a)
        );
        vertex(width / 2 + (R + ea) * cos(a), height / 2 - (R + ea) * sin(a));
        vertex(
          width / 2 + (ea / 2 + R) * cos(a) - (eb / 2) * sin(a),
          height / 2 - (ea / 2 + R) * sin(a) - (eb / 2) * cos(a)
        );
        endShape(CLOSE);
      } else if (st < 3 && st>=2) {
        //rect
        ha = random(5, 10); rb = random(24, 48);
        fill(100, 60, random(80, 120));
        beginShape();
        vertex(
          width / 2 + R * cos(a) + ha * sin(a),
          height / 2 - R * sin(a) + ha * cos(a)
        );
        vertex(
          width / 2 + (rb + R) * cos(a) + ha * sin(a),
          height / 2 - (rb + R) * sin(a) + ha * cos(a)
        );
        vertex(
          width / 2 + (rb + R) * cos(a) - ha * sin(a),
          height / 2 - (rb + R) * sin(a) - ha * cos(a)
        );
        vertex(
          width / 2 + R * cos(a) - ha * sin(a),
          height / 2 - R * sin(a) - ha * cos(a)
        );
        endShape(CLOSE);
      } else {
        //triangle
        tha = random(5, 10); h = random(24, 48);
        fill(random(210, 255));
        triangle(
          width / 2 + R * cos(a) + tha * sin(a),
          height / 2 - R * sin(a) + tha * cos(a),
          width / 2 + R * cos(a) - tha * sin(a),
          height / 2 - R * sin(a) - tha * cos(a),
          width / 2 + (R + h) * cos(a),
          height / 2 - (R + h) * sin(a)
        );
      }
    }
  }
  // saveCanvas("Yining Han",png);
}
