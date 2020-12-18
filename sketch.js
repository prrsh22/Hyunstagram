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
let following;

// state
let notiClicked = false;
let followChecked = true;
let followRequested = false;
let followed = false;

// time
let requestTime;

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
  following = loadImage('assets/images/following.png');
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

  acceptFollow();

  Profile();
  Header();
  
  fill(255);

  for (let i = 0; i<2; i++) {
    for (let j = 0; j<3; j++) {
      rect(30 + 230*j, 260 + 230*i, 200, 200);
    }
  }
  
  
  
}

function mouseOver(m,x,y,w,h) {
  if (m === 'c') return (mouseX > x - w/2 && mouseX < x + w/2 && mouseY > y - h/2 && mouseY < y + h/2);
  else if (m === 'l') return (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h);
}

function mouseClicked() {
  if (!followed) {
    if (mouseOver('l', 410, 80, 80, 30, 10)) { 
      followRequested = !followRequested;
      requestTime = millis();
    }
  }

  if (mouseOver('c', 620, 30, 35, 35)) {
    notiClicked = !notiClicked;
    followChecked = true;
  }
}

function acceptFollow() {
  if (!followed && followRequested && requestTime + 3000 < millis()) {
    followed = true;
    followChecked = false;
  }  
}