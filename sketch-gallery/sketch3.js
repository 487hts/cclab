let cs, cs1, r1=250, r2=200,r3=125,r4=40,a3=90,a1=90, a=30, a2=30,my=-50,bgcv=1,bgcr=2,bgcg=17,bgcb=35,strv=1,strr=255,strg=255,strb=217,mys=2,a1s=1,as=1,a2s=1
function setup() {
  createCanvas(600,600);
  // setupGif(30);
}

function draw() {
  // beginGif();
  if(my>-width/3+700){
    bgcr=bgcr+bgcv;bgcg=bgcg+bgcv*230/249;bgcb=bgcb+bgcv*210/249
    if(bgcr>=251 || bgcg>=247 || bgcb>=245){
      bgcv=0;bgcr=251 ; bgcg=247 ; bgcb=245
    }
  }
  background(bgcr,bgcg,bgcb);
  noStroke();
  fill(246,245,204);
  circle(width/2,my,width/2);
  fill(246,245,204,225);
  circle(width/2,my,width/2+5);
  fill(246,245,204,200);
  circle(width/2,my,width/2+10);
  fill(246,245,204,175);
  circle(width/2,my,width/2+15);
  fill(246,245,204,150);
  circle(width/2,my,width/2+25);
  fill(129,20,34);
  circle(width/2,my-700,width*2/3);
  fill(bgcr,bgcg,bgcb);
  circle(width/2,my-700,width*2/3-10);
  fill(129,20,34);
  circle(width/2,my-700,width*2/3-40);
  circle(width/2+(width/3-2.5)*cos(radians(a3)),my-700+(width/3-2.5)*sin(radians(a3)),25);
  my=my+mys;
  
  a=a+as;a1=a1+a1s;a2=a2-a2s;a3=a3+1
  cs = radians(a);
  cs1=radians(a2);
  strokeWeight(3);//74,19,28,,181,236,189
  if(my>-width/3+700){
    strr=strr-strv; strg=strg-strv*236/181; strb=strb-strv*189/181;
    if(strr<=74||strg<=19||strb<=28){
      strv=0;strr=74;strg=19;strb=28;
    }
  }
  stroke(strr,strg,strb);
  noFill();
  circle(width/2, height*2/3, 500);
  arc(width/2, height*2/3,400,400,cs,15*QUARTER_PI/2+cs);
  arc(width/2, height*2/3,250,250,cs+3*HALF_PI,cs+3*HALF_PI+31*QUARTER_PI/4 );
  circle(width/2, height*2/3,80);
  circle(width/2, height*2/3,8);
  
  for(var i = 0; i <= 330; i += 30){
    line(width/2, height*2/3,width/2+r1*cos(radians(a1+i)), height*2/3-r1*sin(radians(a1+i)));
  }
  for(var j=5; j<=15;j+=5){
    line(width/2+r2*cos(cs1+PI/3+radians(j)), height*2/3-r2*sin(cs1+PI/3+radians(j)),width/2+r1*cos(cs1+PI/3+radians(j)), height*2/3-r1*sin(cs1+PI/3+radians(j)));
    line(width/2+r3*cos(cs1+5*PI/6-radians(j)), height*2/3-r3*sin(cs1+5*PI/6-radians(j)),width/2+r2*cos(cs1+5*PI/6-radians(j)), height*2/3-r2*sin(cs1+5*PI/6-radians(j)));
  }
  line(width/2+r4*cos(cs1-PI/2+radians(7)), height*2/3-r4*sin(cs1-PI/2+radians(7)),width/2+r3*cos(cs1-PI/2+radians(7)), height*2/3-r3*sin(cs1-PI/2+radians(7)));
  line(width/2+r4*cos(cs1-PI/2+radians(14)), height*2/3-r4*sin(cs1-PI/2+radians(14)),width/2+r3*cos(cs1-PI/2+radians(14)), height*2/3-r3*sin(cs1-PI/2+radians(14)));
  
  if(my>=700+700){
    a1s=0;as=0;mys=0;a2s=0;
  }
  // endGif(450);
}