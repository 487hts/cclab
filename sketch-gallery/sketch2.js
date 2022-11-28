let r, g, b, t,sw = 5;
function setup() {
   let cnv = createCanvas(600, 600);
   cnv.parent("Canvas2")
  background(255);
  rect(1,1,87,295)
  rect(1,296,29,29);
  rect(30,296,29,29);
  rect(59,296,29,29);
  rect(100,1,100,25);
  line(15,30,15,285);
  line(45,30,45,285);
  line(75,30,75,285);
  text("R",10,10);
  text("G",40,10);
  text("B",70,10);
  text("0",12,25);
  text("0",42,25);
  text("0",72,25);
  text("255",5,295);
  text("255",35,295);
  text("255",65,295);
  text("pen",5,314);
  text("erase",30,314);
  text("mark",59,314);
  fill(0);
  triangle(105,13.5,195,7,195,20);
}
function draw() {
  fill(r,g,b);
  circle(589,20,20);
  if (mouseIsPressed && (mouseY >= 30 && mouseY<= 325 && mouseX >=1 && mouseX<= 87)||(mouseX>=100 && mouseX<=200 && mouseY>= 1 && mouseY<= 26)){
    if (mouseX >=1 && mouseX<30 && mouseY >= 30 && mouseY<= 285){
      r=mouseY-30
      stroke(r,g,b,t);
    }else if (mouseX >=30 && mouseX<59&& mouseY >= 30 && mouseY<= 285){
      g=mouseY-30
      stroke(r,g,b,t);
    }else if (mouseX >=59 && mouseX<=87&& mouseY >= 30 && mouseY<= 285){
      b=mouseY-30
      stroke(r,g,b,t);
    }else if(mouseY>=296 && mouseY<=325){
      if(mouseX>=1 && mouseX<30){
        noErase();
        t=10000;
        stroke(r,g,b,t);
      }else if(mouseX>=30 && mouseX<59){
        erase();
      }else if(mouseX>=59 && mouseX<=87){
        noErase();
        t=80;
        stroke(r,g,b,t);
      }
    }else if(mouseX >=100 && mouseX<=200 && mouseY>= 1 && mouseY<= 26)    {
      sw=(mouseX-95)/5
  }
  }else if (mouseIsPressed){
    strokeWeight(sw);
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}  