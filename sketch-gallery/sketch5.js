let pta=0, pa=60, as=1, a=0, el=0,els=4, fa=0, fas=1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  strokeWeight(1);
  line(200,130,200,300);
  body();
  head();
  push();
  fa=fa+fas;
  translate(200,130);
    rotate(radians(pta));
    pta=pta+as;
    flower();
  pop();
  face();
  text("Inspired by GRIS by Nomada Sudio",20,20);
}
function head(){
  fill(143,181,169);
  rect(125,230,150,150);
  el=el+els;
  fill(91,108,114);
  if ((Math.floor(el/360))%2==0){
    ellipse(145,360,15,7.5+7.5*cos(radians(el)));
    ellipse(255,360,15,7.5+7.5*cos(radians(el)));
  }else{
    ellipse(145,360,15);
    ellipse(255,360,15);
  }
}
function body(){
  line(200,360,175,400);
  line(200,360,225,400);
  fill(143,181,169);
  ellipse(200,395,35,60);
}
function flower(){
  fill(210,69,66);
  for (i=0;i<=5;i++){
    push();
    translate(50*sin(radians(i*pa)),-50*cos(radians(i*pa)));
      rotate(radians(i*pa));  
      ellipse(0,0,50,100);
    pop();
  }
  fill(242,224,211);
  circle(0,0,50);
}
function face(){
  fill(234,104,162);
  arc(200,130,35,35,0,PI,CHORD);
  strokeWeight(4);
  line(190,118,190,125);
  line(210,118,210,125);
}
function light(){
  
}