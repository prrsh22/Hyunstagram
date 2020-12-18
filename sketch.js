// assets
let basicFont;
let boldFont;
let logoFont;
let userProfile;
let myProfile;
let noti;
let clickedNoti;
let dm;
let home;

// state
let notiClicked = false;
let followed = false;

function preload() {
  basicFont = loadFont('assets/fonts/basic.otf');
  boldFont = loadFont('assets/fonts/bold.otf');
  logoFont = loadFont('assets/fonts/logo.ttf');
  userProfile = loadImage('assets/images/userProfile.png');
  myProfile = loadImage('assets/images/myProfile.png');
  noti = loadImage('assets/images/noti.png');
  clickedNoti = loadImage('assets/images/clickedNoti.png');
  dm = loadImage('assets/images/dm.png');
  home = loadImage('assets/images/home.png');
}

function setup() {
  createCanvas(720, 720);
}

function draw() {
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  textFont(basicFont);

  background(255);
  stroke(96, 96, 96, 70);

  Profile();
  Header();
  
  fill(255);

  for (let i = 0; i<2; i++) {
    for (let j = 0; j<3; j++) {
      rect(30 + 230*j, 260 + 230*i, 200, 200);
    }
  }
  
  
  
}

function mouseOver(x,y,w,h) {
  // imageMode CENTER일 경우
  return (mouseX > x - w/2 && mouseX < x + w/2 && mouseY > y - h/2 && mouseY < y + h/2);
}

function mouseClicked() {
  if (mouseOver(620, 30, 35, 35)) notiClicked = !notiClicked;
}
