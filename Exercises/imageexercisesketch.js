function preload (){
    img= loadImage("https://github.com/creativeCodingART2210Fall2019Section2/Purvis_Liza__ART2210_Fall2019/raw/master/projects/Purvis_Liza_ART2210_Self-Portrait_Fall2019/images/WPAP%20example.jpg")

}

function setup (){
    createCanvas (windowWidth,windowHeight);

}

function draw (){
    image(img,50,50);

}

function windowResized (){
resizeCanvas (windowWidth, windowHeight);
}