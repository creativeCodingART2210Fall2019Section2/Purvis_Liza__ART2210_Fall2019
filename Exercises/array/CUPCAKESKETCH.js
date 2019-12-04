
let cups = []; 

function setup() {
  createCanvas(windowWidth,windowHeight);

  for (let i = 0; i < 10; i++) {
    cups.push(new Jitter());

 }
  }
 

function draw() {
 //solid color
    background(0);



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
    this.diameter =(20, 40);
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
      fill(74, 25, 5 )
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(255)
    ellipse(this.x,this.y-15,this.diameter,this.diameter-10);
    fill(240, 29, 8)
    ellipse(this.x,this.y-28,10,10)
  }
contains(px,py) {
        let d=dist(px,py,this.x,this.y);
        if(d<this.radius){
            return true;
        }else {
                return false;
            }
        }
       
    }


  function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}


