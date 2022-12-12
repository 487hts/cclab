
console.log("my script loads")
let texts = [], rn, T;
let bgp ;
function setup(){
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvasContainer")
    T="Hello there!";
  texts.push(T);
  T="How is everything going on?";
  texts.push(T);
  T="Have a nice day!";
  texts.push(T);
  T="Wish you good luck!";
  texts.push(T);
  T="You are doing a good job!";
  texts.push(T);
}
let pF = [], pH = [], pC = [], pP = [], pHe = [], pHa = [];
let F, H, C, P, He, Ha; 
let aNewFace, faces=[];
let cF = 0, cH=0, cC=0, cP=0, cHe=0, cHa=0;
let Button, buttons = [];
function preload(){
  bgp = loadImage("背景3.jpeg");
  Button = loadImage("Face.png");
  buttons.push(Button);
  Button = loadImage("Hair.png");
  buttons.push(Button);
  Button = loadImage("Cloth.png");
  buttons.push(Button);
  Button = loadImage("Pant.png");
  buttons.push(Button);
  Button = loadImage("Headdress.png");
  buttons.push(Button);
  Button = loadImage("Handheld.png");
  buttons.push(Button);
  F = loadImage("Face1.png");
  pF.push(F);
  F = loadImage("Face2.png");
  pF.push(F);
  F = loadImage("Face3.png");
  pF.push(F);
  F = loadImage("Face4.png");
  pF.push(F);
  F = loadImage("Face5.png");
  pF.push(F);
  H = loadImage("Hair1.png");
  pH.push(H);
  H = loadImage("Hair2.png");
  pH.push(H);
  H = loadImage("Hair3.png");
  pH.push(H);
  H = loadImage("Hair4.png");
  pH.push(H);
  H = loadImage("Hair5.png");
  pH.push(H);
  He = loadImage("Head1.png");
  pHe.push(He);
  He = loadImage("Head2.png");
  pHe.push(He);
  He = loadImage("Head3.png");
  pHe.push(He);
  He = loadImage("Head4.png");
  pHe.push(He);
  He = loadImage("Head5.png");
  pHe.push(He);
}
function draw() {
  image(bgp, 0,0);
  push();
  translate(width/9, height/2);
    strokeWeight(1);
    rectMode(CENTER);
    for (let i = 0; i<6; i++){
      rect(0,-height*0.8/3+i*height/9,100,50);
      image(buttons[i],-25,-height*0.8/3+i*height/9-25)
    }
  pop();
  push();
  translate(width*11/18, height/2);
    // rectMode(CENTER);
    // rect(0,-height/6,300);
    image(pF[cF], -150, -150-height/6);
    image(pH[cH], -150, -153-height/6);
    image(pHe[cHe], -150, -153-height/6);
  pop();
  
}
class Hand{
  constructor(){
    
  }
  draw(){
    
  }
  act(){
    
  }
}
function mouseClicked(){
  if(mouseX<=width/9+50 && mouseX>=width/9-50 && mouseY<=height/2-height*0.8/3+25 && mouseY>=height/2-height*0.8/3-25){
     cF++
    if(cF==5){
      cF=0
    }
     }else if(mouseX<=width/9+50 && mouseX>=width/9-50 && mouseY<=height/2-height*0.8/3+1*height/9+25 && mouseY>=height/2-height*0.8/3+1*height/9-25){
          cH++
    if(cH==5){
      cH=0
    }    
              }else if(mouseX<=width/9+50 && mouseX>=width/9-50 && mouseY<=height/2-height*0.8/3+2*height/9+25 && mouseY>=height/2-height*0.8/3+2*height/9-25){
              cC++
    if(cC==5){
      cC=0
    }
              }else if(mouseX<=width/9+50 && mouseX>=width/9-50 && mouseY<=height/2-height*0.8/3+3*height/9+25 && mouseY>=height/2-height*0.8/3+3*height/9-25){
              cP++
    if(cP==5){
      cP=0
    }
              }else if(mouseX<=width/9+50 && mouseX>=width/9-50 && mouseY<=height/2-height*0.8/3+4*height/9+25 && mouseY>=height/2-height*0.8/3+4*height/9-25){
              cHe++
    if(cHe==5){
      cHe=0
    }
              }else if(mouseX<=width/9+50 && mouseX>=width/9-50 && mouseY<=height/2-height*0.8/3+5*height/9+25 && mouseY>=height/2-height*0.8/3+5*height/9-25){
              cHa++
    if(cHa==5){
      cHa=0
    }
              }else if(mouseX>=width*11/18){
                rn = round(random(0,4));
                console.log(texts[rn])
                createParagraph(texts[rn])
              }
}




function createParagraph(text){
    const para = document.createElement("p");
    // text = "njknjkj"
    para.innerHTML = text;
    document.getElementById("textHolder").appendChild(para);
}


