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
let liked;

let accepted;
let rejected;

// state
let notiClicked = false;
let followChecked = true;
let followRequested = false;
let followed = false;

// feeds
let imgs = [];
let texts = ['내가 속한 곳이 이렇게 많았\n구나... 다들 저랑 놀아주셔서\n감사합니다..^^!', 
'오버워치 언제 끊냐.. 진짜\n여태까지 할 줄은 몰랐다...', 
'탈케이팝 언제 하지.. 절대\n못할듯ㅎㅎ.. 직캠 추천 받\n습니다...~~ 사진은 위아이\n김동한 김요한..^.^ 아이들\n블랙핑크 NCT 투바투 등등\n다 품어욧,,', 
'아 다 색칠할 줄 알았는데..\n호불호는 거의 극호 >_<\n민초 못 먹음.. 없어서;', 
'이번 학기를 갈아서 (거의)\n만든 도토링!\nwww.dotoring.com\n커밍쑨... 아좌좌', 
'코노 가고 싶다.... 주 4회\n코노 가던 시절...코로나 주겅'];
let feeds = [];
let feedOpened = false;

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
  liked = loadImage('assets/images/liked.png');

  accepted = loadSound('assets/sounds/accepted.mp3');
  rejected = loadSound('assets/sounds/rejected.mp3');

  for (let i=0; i<6;i++){
    imgs[i] = loadImage(`assets/images/feed/${i}.jpg`);
  }

}

function setup() {
  createCanvas(720, 720);
  for (let i =0; i<6;i++) {
    feeds[i] = new Feed(imgs[i], texts[i], 30 + 230 * (i % 3), 260 + 230 * Math.floor((i / 3)));
  }
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
  
  Posts();

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
  } else if (!feedOpened) {
    feeds.forEach(feed => {
      if (feed.over()) {
        feedOpened = str(feeds.indexOf(feed));
      }
    });
  } else if (feedOpened) {
    if (!mouseOver('l', 60, 275, 600, 400) && mouseOver('l', 0, 230, 720, 720)) feedOpened = undefined;
    else if (mouseOver('c', 485, 595, 30, 30)) {
      feed = feeds[feedOpened];
      if (feed.liked) feed.like -= 1;
      else feed.like += 1;
      feed.liked = !feed.liked
    }
  }

  if (mouseOver('c', 620, 30, 35, 35) || notiClicked) {
    notiClicked = !notiClicked;
    followChecked = true;
  }

}

function acceptFollow() {
  if (!followed && followRequested && requestTime + 2000 < millis()) {
    if (Math.random() < 0.8) {
      followed = true;
      followChecked = false;
      accepted.play();
    } else {
      followRequested = false;
      rejected.play();
    }
  }  
}