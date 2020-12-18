function Header() {
    fill(255);
    rect(0, 0, 900, 60);

    // Logo
    fill(0);
    textSize(40);
    push();
    textFont(logoFont);
    text('Hyunstagram', 120, 20);
    pop();

    // Home, DM
    image(home, 520, 30, 50, 55);
    image(dm, 570, 30, 35, 35);

    // noti
    if (notiClicked) {
        image(clickedNoti, 620, 30, 35, 35);
        
        fill(255);
        triangle(620, 50, 610, 65, 630, 65);
        rect(450, 65, 200, 100);

        fill(0);
        textSize(20);
        if (followed) { 

            push();
            textAlign(LEFT);

            textSize(15);
            textFont(boldFont);
            text('woocha_29', 525, 80);
            textFont(basicFont);
            text('님이 팔로우 요청을', 525, 110);
            text('수락했습니다.', 525, 140);
            pop();

            image(myProfile, 490, 100, 50, 50);

        } else {
            text('알림이 없습니다.', 550, 110);
        }

    } else {
        image(noti, 620, 30, 35, 35);
    }

    // ProfilePic
    image(userProfile, 665, 30, 40, 40);
}

function Profile() {
    fill(240, 240, 240);
    rect(0, 60, 900, 170);
}