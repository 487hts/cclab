// let aNewSlide, slides=[];
let pF=[], pH=[], pC=[], pHe=[], pP=[];
let lpic=[];
let cF=0, cH=0, cC=0, cHe=0, cP=0,c=5;
let face, hair, cloth, headdress, pant;
let pB, bpics=[];
let sxs=[], sys=[];
let lx,exi,exii,eyi,eyii;
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
  //头饰3
  pB = loadImage("Head1.png");
  pHe.push(pB);
  pB = loadImage("Head2.png");
  pHe.push(pB);
  pB = loadImage("Head3.png");
  pHe.push(pB);
  pB = loadImage("Head4.png");
  pHe.push(pB);
  pB = loadImage("Head5.png");
  pHe.push(pB);
  //头发2
  pB = loadImage("Hair1.png");
  pH.push(pB);
  pB = loadImage("Hair2.png");
  pH.push(pB);
  pB = loadImage("Hair3.png");
  pH.push(pB);
  pB = loadImage("Hair4.png");
  pH.push(pB);
  pB = loadImage("Hair5.png");
  pH.push(pB);
  //脸1
  pB = loadImage("Face1.png");
  pF.push(pB);
  pB = loadImage("Face2.png");
  pF.push(pB);
  pB = loadImage("Face3.png");
  pF.push(pB);
  pB = loadImage("Face4.png");
  pF.push(pB);
  pB = loadImage("Face5.png");
  pF.push(pB);
  //衣服5
  pB = loadImage("Cloth1.png");
  pC.push(pB);
  pB = loadImage("Cloth2.png");
  pC.push(pB);
  pB = loadImage("Cloth3.png");
  pC.push(pB);
  pB = loadImage("Cloth4.png");
  pC.push(pB);
  pB = loadImage("Cloth5.png");
  pC.push(pB);
  //裤子4
  pB = loadImage("Pant1.png");
  pP.push(pB);
  pB = loadImage("Pant2.png");
  pP.push(pB);
  pB = loadImage("Pant3.png");
  pP.push(pB);
  pB = loadImage("Pant4.png");
  pP.push(pB);
  pB = loadImage("Pant5.png");
  pP.push(pB);
}
function setup() {
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvasContainer");
  for (let s=0; s<3; s++){
    sxs.push(width/10-30);
    sys.push(height*3/4-5+s*40);
  }
  lx  = width/10-40;
  background(255);
  
}

function draw() {
  noStroke();
  fill(255);
  rect(0,height*5/8+30,width/10+236,height/4+46);
  rect(width*2/3-200,height/2-300,400,600);
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
  line(lx,height*7/8+25,lx,height*7/8+75);
  lpic[0] = pF[cF];
  lpic[1] = pH[cH];
  lpic[2] = pHe[cHe];
  lpic[3] = pP[cP];
  lpic[4] = pC[cC];
  for(let pics=0; pics<5; pics++){
    image(lpic[pics],width*2/3-200,height/2-300);
  }
  fill(0);
  exi = map(mouseX, 0,width,width*2/3-55,width*2/3-45);
  exii = map(mouseX,0,width,width*2/3+50,width*2/3+60);
  eyi = map(mouseY, 0,height, height/2-75, height/2-65);
  eyii = map(mouseY, 0,height, height/2-80, height/2-70);
  ellipse(exi,eyi,18,30);
  ellipse(exii,eyii,18,30);
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
    if(mouseX>=width/10-30 && mouseX<=width/10+225 && mouseY>height*3/4-25 && mouseY<height*3/4+15){
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
    strokeWeight((lx-width/10+40)/6+1);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
function mouseClicked(){
  //Head Hair Face Cloth Pant
  if(mouseX>width/10-50 && mouseX<width/10+50 && mouseY>height/8-25 && mouseY<height/8+25){
     cHe ++;
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
    strokeWeight((lx-width/10+40)/6+1);
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
    text(round(sxs[z]-width/10+30), width/10-70, height*3/4+z*40);
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
  text(round((lx-width/10+40)/6)+1,width/10-70,height*7/8+50);
  text("strokeBar",width/10+20,height*7/8+20);
  triangle(width/10-40,height*7/8+50,width/10+140,height*7/8+35, width/10+140,height*7/8+65);
}