let aNewPetol, petols=[], petolPic, bgp;
function preload(){
    petolPic = loadImage("花瓣.png")
    bgp = loadImage("背景1.png")
}
function setup(){
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvasContainer")
    // background(255,255,255,0);
}
function draw(){
    image(bgp,0,0);
    if (frameCount%30==0){
        aNewPetol = new Petol(petolPic)
        petols.push(aNewPetol);
    }
    for (let j = 0; j<petols.length; j++){
        petols[j].act();
        petols[j].draw();
    }
    if (petols.length>=200){
        petols.splice(0,1);
    }
}
class Petol{
    constructor(Pic){
        this.chance = random(0, 2);
        if (this.chance >= 0 && this.chance <= 1) {
            this.px = random(0, width);
            this.py = 0;
        } else {
            this.px = 0;
            this.py = random(0, width);
        }
        this.scale = random(0,1);
        this.pic = Pic;
        this.pangle = 45;
    }
    draw(){
        push();
        translate(this.px+25, this.py+25)
        scale(this.scale);
        rotate(this.pangle);
        image(this.pic, -25,-25);
        pop();
    }
    act(){
        this.px += 1;
        this.py += 1;
        this.pangle += 0.05
    }
}