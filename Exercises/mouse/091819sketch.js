function setup() {
  createCanvas (1000,1000)
  noStroke ();
}

function draw() {
    background(126);
    let x = mouseX;
  let y = mouseY;
  let ix = height - mouseX;  // Inverse X
  let iy = width - mouseY; // Inverse Y
  background(212, 160, 245 );
  fill (160, 245, 221);
  ellipse(x, height/4, y, y);
  fill(127, 127, 241);
  ellipse(ix, height/4, iy, iy);

      }
