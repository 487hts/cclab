    // let aNewSlide, slides=[];
let pF=[], pH=[], pC=[], pHe=[], pP=[];
let lF=[], lH=[], lC=[], lHe=[], lP=[];
let cF=0, cH=0, cC=0, cHe=0, cP=0,c=5;
let face, hair, cloth, headdress, pant;
let pB, bpics=[];
let sxs=[], sys=[];
let lx;
function preload(){
  //按钮们
  pB = loadImage("Headdress.png");
  bpics.push(pB);
  pB = loadImage("Hair.png");
  bpics.push(pB);
  pB = loadImage("Face.png");
  bpics.push(pB);
  pB = loadImage("Cloth.png");
  bpics.push(pB);
  pB = loadImage("Pant.png");
  bpics.push(pB);
  //头饰
  
  //头发
  
  //脸
  
  //衣服
  
  //裤子
  
}
function setup() {
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvasContainer")
  for (let s=0; s<3; s++){
    sxs.push(width/10-30);
    sys.push(height*3/4-5+s*40);
  }
  lx  = width/10-40;
  background(220);
}

function draw() {
  noStroke();
  fill(220);
  rect(0,height*5/8+30,width/10+236,height/4+46);
  for(let i = 1; i<=5; i++){
    buttons(i);
  }
  rgbBar();
  strokeBar();
  // for(let j = 0; j<sxs.length; j++){
  //   aNewSlide = new Slide(sxs[j],sys[j]);
  //   slides.push(aNewSlide);
  //   slides[j].act();
  //   slides[j].draw();
  // }
  stroke(0);
  strokeWeight(1);
  line(lx,height*7/8+25,lx,height*7/8+75)
}
// class Slide{
//   constructor(sx, sy){
//     this.sx = sx;
//     this.sy = sy;
//   }
//   draw(){
//     push();
//     translate(this.sx, this.sy);
//       stroke(0);
//       strokeWeight(1);
//       noFill();
//       rectMode(CENTER);
//       rect(0,0,5,20);
//       line(0,-10,0,10);
//     pop();
//   }
//   act(){
    
//   }
// }
function mouseDragged(){
  //Head Hair Face Cloth Pant
  if(mouseX>width/10-50 && mouseX<width/10+50 && mouseY>height/8-25 && mouseY<height/8+25){
     cHe ++
    if(cHe >= c){
      cHe = 0;
    }
     }else if(mouseX>width/10-50 && mouseX<width/10+50 && mouseY>height*2/8-25 && mouseY<height*2/8+25){
              cH ++
    if(cH >= c){
      cH = 0;
    }
              }else if(mouseX>width/10-50 && mouseX<width/10+50 && mouseY>height*3/8-25 && mouseY<height*3/8+25){
              cF ++
    if(cF >= c){
      cF = 0;
    }
              }else if(mouseX>width/10-50 && mouseX<width/10+50 && mouseY>height*4/8-25 && mouseY<height*4/8+25){
              cC ++
    if(cC >= c){
      cC = 0;
    }
              }else if(mouseX>width/10-50 && mouseX<width/10+50 && mouseY>height*5/8-25 && mouseY<height*5/8+25){
              cP ++
    if(cP >= c){
      cP = 0;
    }
              }else if(mouseX>=width/10-30 && mouseX<=width/10+225 && mouseY>height*3/4-25 && mouseY<height*3/4+15){
                       sxs[0] = mouseX
                       }else if(mouseX>=width/10-30 && mouseX<=width/10+225 && mouseY>height*3/4+15 && mouseY<height*3/4+55){
                       sxs[1] = mouseX
                       }else if(mouseX>=width/10-30 && mouseX<=width/10+225 && mouseY>height*3/4+55 && mouseY<height*3/4+95){
                       sxs[2] = mouseX
                       }else if(mouseX>=width/10-40 && mouseX<=width/10+140 && mouseY>height*7/8+25 && mouseY<height*7/8+75){
                         lx = mouseX       
                                }
  else{
    stroke(sxs[0]-width/10+30,sxs[1]-width/10+30,sxs[2]-width/10+30);
    strokeWeight((lx-width/10+40)/6);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
function buttons(y){
  push();
  translate(width/10, y*height/8);
    stroke(0);
    strokeWeight(1);
    fill(255);
    rectMode(CENTER);
    rect(0,0,100,50);
    image(bpics[y-1],-25,-25);
  pop();
}
function rgbBar(){
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(width/10-50, height*3/4-25,285,120);
  //分界线
  line(width/10-50, height*3/4+15,width/10-50+285, height*3/4+15);
  line(width/10-50, height*3/4+55,width/10-50+285, height*3/4+55);
  //rgb线
  line(width/10-30, height*3/4-5,width/10+225, height*3/4-5);
  line(width/10-30, height*3/4+35,width/10+225, height*3/4+35);
  line(width/10-30, height*3/4+75,width/10+225, height*3/4+75);
  fill(0);
  text("rgbBar",width/10+82.5,height*3/4-35);
  text("0",width/10-50,height*3/4-35);
  text("255",width/10+215,height*3/4-35);
  text("R",width/10-43, height*3/4-1);
  text("G",width/10-43, height*3/4+39);
  text("B",width/10-43, height*3/4+79);
  //显示数值
  for(let z = 0; z<3; z++){
    text(sxs[z]-width/10+30, width/10-70, height*3/4+z*40);
  }
  //slide
  for(let num=0; num<3; num++){
    push();
    translate(sxs[num], sys[num]);
      stroke(0);
      strokeWeight(1);
      noFill();
      rectMode(CENTER);
      rect(0,0,5,20);
      line(0,-10,0,10);
    pop();
  }
  
}
function strokeBar(){
  stroke(0);
  strokeWeight(1);
  fill(255);
  rect(width/10-50, height*7/8+25,200,50)
  fill(0);
  text(round((lx-width/10+40)/6),width/10-70,height*7/8+50);
  text("strokeBar",width/10+50,height/7/8+10);
  triangle(width/10-40,height*7/8+50,width/10+140,height*7/8+35, width/10+140,height*7/8+65);
}