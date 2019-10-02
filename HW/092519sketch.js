function setup() {
    createCanvas(1000,500);
  }
  function draw() {
    background(51);

     //3D effect (white: back)
     fill (214, 200, 140)
    beginShape();
    vertex (150,120)
    vertex (300,90)
    vertex (830,90)
    vertex (950,120)
    endShape ();
 
   endShape ();


   //full body (white)
    fill (249, 238, 192)
    rect (150,120,800,200)




     //body (behind)
     fill (107, 47, 8 )
     strokeWeight (2)
     stroke (255,255,255)
     rect (200,150,700,150,20,15,10,5);

       //3D effect (dial left)
       fill (66,32,4)
       noStroke ();
       rect (240,190,50,90)

     //dial left
     fill (0,0,0)
     noStroke ();
     rect (250,200,30,70)

    
    //body
    fill (125, 54, 7 )
    strokeWeight (4)
    stroke (255,255,255)
    rect(300, 150, 500, 150, 20, 15, 10, 5);

    //clock dial area (left)
    fill (66,32,4)
    noStroke ();
    rect (370,175,360,100);

     //dial right
     fill (0,0,0)
     noStroke ();
     rect (750,200,30,70)

     translate (550,225)
     scale (.2,.2)

     
       
       var radius = int(min(width, height) / 2);
       var numPoints = 60;
       var angle = TWO_PI/numPoints;
       
       var secondsRadius = radius * 0.72;
       var minutesRadius = radius * 0.60;
       var hoursRadius = radius * 0.50;
       var clockDiameter = radius * 1.8;
       
       // clockbackground
       fill(249, 238, 192);
       noStroke();
       ellipse(0, 0, clockDiameter, clockDiameter);
       // start
       var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
       var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
       var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
       //minute/second ticks 
       strokeWeight(2);
       stroke(0);
       beginShape(POINTS);
       var i = 0;
       while (i < numPoints ) {
           x = cos(angle*i) * secondsRadius; 
           y = sin(angle*i) * secondsRadius;
           vertex(x, y);
           i++;
       }
       endShape(); 
       
       strokeWeight(1);
       line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
       strokeWeight(2);
       line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
       strokeWeight(4);  // hour hand should be thicker
       line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);
       
       // Write the numerals
       fill(0);
       textSize(16);
       strokeWeight(0.1);
       x = cos(PI + HALF_PI) * secondsRadius - 10;
       y = sin(PI + HALF_PI) * secondsRadius - 10;
       text("XII", x, y);
       
       x = cos(TWO_PI) * secondsRadius + 10;
       y = sin(TWO_PI) * secondsRadius + 5;
       text("III", x, y);
       x = cos(HALF_PI) * secondsRadius - 7;
       y = sin(HALF_PI) * secondsRadius + 20;
       text("VI", x, y);
       x = cos(PI) * secondsRadius - 25;
       y = sin(PI) * secondsRadius + 5;
     
  
   
    

  }

