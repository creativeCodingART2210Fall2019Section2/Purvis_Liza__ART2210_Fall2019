var weather1;


function preload (){
    weather1 =
    loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75&units=metric")
}

function setup(){
   createCanvas (windowWidth,windowHeight);
}

function draw(){
    background(144, 12, 63 );
    if(weather1){
        textAlign(CENTER);
        fill (255);
        text(weather1.name,width/2-20,50)
        text(weather1.main.humidity,width/2-20,30)
        text(weather1.main.temp,width/2-200,50)
        ellipse(width/2-20,height/2,weather1.main.humidity,weather1.main.temp);
        fill(10, 255, 132 );
    }
}

