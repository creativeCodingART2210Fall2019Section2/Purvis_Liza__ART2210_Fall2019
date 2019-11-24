let score=0;
let cups = []; 
var img;


function preload (){
 img=loadImage ("https://github.com/creativeCodingART2210Fall2019Section2/Purvis_Liza__ART2210_Fall2019/raw/master/projects/Coding%20Final%20project/images/2cupcake.png") 

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
  }
}

  }


function draw() {
 
background (168, 18, 95 );
 
//text functions
 fill(255);
 textSize(80);
 text("score:"+score,50,150);




  for (let i = 0; i < cups.length; i++) {
      if (cups[i].contains(mouseX,mouseY)){
          cups[i].changeColor();
      }
    cups[i].move();
    cups[i].display();

     //eyebrows
     fill(123,78,45);
     noStroke();
     rect(mouseX,mouseY-20,20,10);
    //hair back
     fill(99, 54, 32 )
     strokeWeight(3);
     stroke (51);
     ellipse(mouseX,mouseY-60,100,100)
    //hair front
       fill(123,78,45);
       stroke(51);
       ellipse(mouseX,mouseY-20,150,150) 
     
     //modelhead
     fill(234, 202, 186);
     stroke(0);
     ellipse(mouseX, mouseY, 150, 150);
    
    //mouth
    fill (0)
    noStroke ();
    ellipse(mouseX,mouseY+50,100,100)
    
     //tongue
     fill(203, 41, 77)
     noStroke();
     ellipse(mouseX,mouseY+57,70,50)
      //tongue shade
      fill(136, 10, 10)
      noStroke();
      ellipse(mouseX,mouseY+48,60,30)
    
    //teeth
    fill(255,255,255)
    noStroke();
    ellipse(mouseX,mouseY+17,70,35)
    
    //cheeks
    fill (240, 128, 128)
    noStroke();
    ellipse (mouseX-55,mouseY+10,50,30)
    fill (240, 128, 128)
    noStroke();
    ellipse (mouseX+55,mouseY+10,50,30)
    //eyeshade
    fill (223, 174, 122 )
    noStroke();
    ellipse (mouseX+40,mouseY-20,40,30)
    fill (223, 174, 122 )
    noStroke();
    ellipse (mouseX-40,mouseY-20,40,30)
    
    //eyes
    fill (255,255,255)
    strokeWeight(3);
    stroke (51);
    ellipse (mouseX+40,mouseY-10,40,30)
    fill (255,255,255)
    strokeWeight(3);
    stroke (51);
    ellipse (mouseX-40,mouseY-10,40,30)
    
    //irises
    fill (0,0,0)
    noStroke ();
    ellipse(mouseX-50,mouseY-15,20,20)
    fill (0,0,0)
    noStroke ();
    ellipse(mouseX+50,mouseY-15,20,20)   
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


