let aNewPetol, petols=[], petolPic;
function preload(){
    petolPic = loadImage("花瓣.png")
}
function setup(){
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvasContainer")
    background(255,255,255,0);
}
function draw(){
    if (framecount == 30){
        for(let i = 0; i<random(1,4); i++){
            aNewPetol = new Petol(petolPic)
            petols.push(aNewPetol);
        }
    }
    for (let j = 0; j<petols.length; j++){
        petols[petols.length-1].act();
        petols[petols.length-1].draw();
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
        this.scale = random(50,200);
        this.pic = Pic;
        this.pangle = 45;
    }
    draw(){
        push();
        translate(this.px+25, this.py+25)
        scale(this.scale);
        rotate(this,pangle);
        image(this.pic, -25,-25);
        pop();
    }
    act(){
        this.px += random(-random(0, 1), random(1, 11));
        this.py += random(-random(0, 1), random(1, 11));
        this.pangle += random(5, 10);
    }
}