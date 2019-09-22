function setup() {
  createCanvas (1000,1000);
  background(106, 19, 155 );
}

function draw(){

    //background
    fill(311,46,30)
    noStroke();
    ellipse (500,450,900,900)

  //neck
  translate(-50,90)
  fill(102, 13, 98 )
  noStroke();
  rect(340,500,400,450);
  
  //neckshade
  fill (55,6,76)
  noStroke();
  ellipse (540,700,400,400)
//bottomjaw
fill(149, 38, 166)
beginShape();
vertex(255,500)
vertex(260,550)
vertex(270,580)
vertex(280,700)
vertex(400,790)
vertex(410,800)
vertex(460,840)
vertex(550,850)
vertex(640,840)
vertex(690,800)
vertex(700,790)
vertex(790,700)
vertex(800,580)
vertex(810,550)
vertex(805,500)
endShape();

//chin pt 2
fill (234, 122, 229)
noStroke
triangle (450,710,300,640,537,820) 
triangle (630,710,790,640,535,820)

//toplips
fill (214, 64, 171)
ellipse(530,620,150,50)

//bottom lip
fill(176, 36, 135 )
beginShape ();
vertex(620,625)
vertex(580,660)
vertex(530,690)
vertex(510,680)
vertex(450,625)
endShape ();

//hair (back)
fill(66, 31, 3 )
noStroke
circle(550,60,300) 

//hair(middle)
fill(80,33,8)
beginShape();
vertex (100,600)
vertex(245,200)
vertex(260,180)
vertex(320,120)
vertex(550,60)
vertex(800,120)
vertex(830,180)
vertex(840,200)
vertex(1000,600)
vertex(800,300)
vertex(550,190)
vertex(300,300)
vertex(100,600)
endShape ();

//ear1
fill (240, 128, 128)
noStroke
ellipse(230,450,100,200)
ellipse(880,450,100,200)



  fill (167, 45, 163)
beginShape();
//half cheek 
vertex (220,300)
vertex(230,400)
vertex(240,450)
vertex(260,520)
vertex(270,540)
vertex(280,550)
vertex(290.560)
vertex(300,570)
vertex(330,570)
vertex(350,570)
vertex(370,580)
vertex(380,590)
vertex(390,600)
vertex(400,610)
vertex(410,620)
vertex(420,630)
vertex(430,630)
vertex(440,630)
vertex(470,620)
vertex(480.610)
vertex(490,605)
vertex(500,620)
vertex(510,630)
vertex(520,630)


//half cheek2
vertex(875,300)
vertex(855,400)
vertex(845,450)
vertex(825,520)
vertex(815,540)
vertex(805,550)
vertex(795,560)
vertex(785,570)
vertex(735,570)
vertex(715,570)
vertex(695,580)
vertex(685,590)
vertex(675,600)
vertex(665,610)
vertex(655,620)
vertex(645,630)
vertex(635,630)
vertex(625,630)
vertex(595,620)
vertex(585,610)
vertex(575,605)
vertex(565,620)
vertex(555,630)
vertex(545,630)
endShape();

//midface
fill(240, 133, 236)
beginShape();
vertex(220,300)
vertex(350,200)
vertex(550,175)
vertex(750,200)
vertex(875,300)
vertex(535,630)
endShape();

//cheeks highlights
fill(246, 204, 245)
noStroke
triangle (300,420,430,520,450,420)
triangle(650,420,670,500,800,420)

//hair(front)
fill(121, 56, 5 )
noStroke
beginShape ();
vertex (220,295)
vertex (240,390)
vertex (254,420)
vertex(310,700)
vertex(200,410)
endShape ();

fill(121, 56, 5 )
noStroke
beginShape ();
vertex (875,295)
vertex (895,390)
vertex (911,420)
vertex(783,700)
vertex(830,410)
endShape ();


//eyebrow1
fill (80,33,8)
noStroke();
beginShape ();
vertex (540,245)
vertex(600,295)
vertex(700,210)
endShape();



//nosebridgebase
fill(175, 93, 172 )
quad(550, 281, 465, 400, 550, 550, 630, 390);

//highlight nose bridge
fill (246, 204, 245)
noStroke
rect (535,330,30,150)

//eyeball
strokeWeight(4);
stroke('#222222');
fill (255,255,255)
ellipse (400,350,120,100)

//iris
fill (80, 33, 8)
noStroke();
circle(410,358, 60,150);

//pupil
fill (0,0,0)
circle (410,358,30,90)


//eyelid
fill(240, 128, 128)
noStroke
arc(400, 340, 120, 100, PI, TWO_PI);

//eyebrow2
fill(80,33,8)
noStroke();
beginShape();
vertex(475,330)
vertex(500,285)
vertex(395,285)
vertex()
endShape ();

//eyelid2
fill(240, 128, 128)
noStroke
arc(700, 320, 120, 100, PI, TWO_PI);


//eyeball2

fill (255,255,255)
strokeWeight(4);
stroke('#222222');
ellipse (700,350,120,100)

//iris2
fill (80, 33, 8)
noStroke();
circle(710,358, 60,150);

//pupil2
fill (0,0,0)
circle (710,358,30,90)

//nostril1
fill(198, 115, 195 )
noStroke();
circle (610,500,60,90)


//nostril2
fill(198, 115, 195 )
noStroke();
circle (493,500,60,90)

//nose ring
fill(311,46,30)
noStroke();
circle(480,490,15,10)


  //round nose
fill (246, 204, 245 )
noStroke ();
ellipse (550,500,100,100)

//chin
translate (50,-10)
fill (246, 204, 245) 
noStroke
triangle(580, 720, 400, 720, 486, 830);






}




  function windowResized (){
      resizeCanvas (windowWidth, windowHeight);
      background(106, 19, 155 );
  }
  
