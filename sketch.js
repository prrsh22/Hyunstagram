function setup() {
  createCanvas(720, 720);
}

function draw() {
  //rectMode(CENTER);
  background(0);
  fill(255);
  rect(0, 0, 900, 60);
  fill('gray');
  rect(0, 60, 900, 150);
  fill(255);
  for (let i = 0; i<2; i++) {
    for (let j = 0; j<3; j++) {
      rect(30 + 230*j, 240 + 230*i, 200, 200);
    }
  }
  
  fill(0);
  text('Hyunstagram', 30, 100);
  
}