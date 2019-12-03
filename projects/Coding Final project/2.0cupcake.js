let score=0;
let cups = []; 
var img;
var girl;
var x=500;
var speed=3;

function preload (){
 img=loadImage ("https://github.com/creativeCodingART2210Fall2019Section2/Purvis_Liza__ART2210_Fall2019/raw/master/projects/Coding%20Final%20project/images/2cupcake.png") 
girl= loadImage ("https://github.com/creativeCodingART2210Fall2019Section2/Purvis_Liza__ART2210_Fall2019/raw/master/projects/Coding%20Final%20project/images/2FINAL-IMAGE.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);


  for (let i = 0; i < 15; i++) {
    cups.push(new Jitter()); 
 }
  }
  function mousePressed(){
    for (let i = 0; i < cups.length; i++) {
        if (cups[i].contains(mouseX,mouseY)){
            cups.splice(i,1);
            score ++;
         } if(score==15){
              alert("SUGAR HIGH ACHIEVED!YOU'RE A WINNER!");
              document.location.reload();
              clearInterval(interval);
  }
}
  }


function draw() {
 
background (168, 18, 95 );


 //text functions
 fill(255);
 textSize(100);
 text("score:"+score,100,150);

image (girl,mouseX,mouseY);


  for (let i = 0; i < cups.length; i++) {
      if (cups[i].contains(mouseX,mouseY)){
          cups[i].changeColor();
      }
    cups[i].move();
    cups[i].display();

  
    }
}

class Jitter {
  constructor() {
    this.x = random(width)-15;
    this.y = random(height)-20;
    this.diameter =(100, 100);
    this.radius=(10,20);
    this.speed = 1;
  }
changeColor(bright){
    this.brightness=bright;
}
move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

display() {
imageMode (CENTER);
     image(img,this.x,this.y);
  }
contains(px,py) {
        let d=dist(px,py,this.x,this.y);
        if(d<this.diameter){
            return true;
        }else {
                return false;
            }
        }
       
    }


  function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}

