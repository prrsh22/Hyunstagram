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

    // UserProfilePic
    image(userProfile, 665, 30, 40, 40);
}

function Profile() {
    fill(240, 240, 240);
    rect(0, 60, 900, 170);

    // ProfilePic
    image(myProfile, 130, 145, 130, 130);

    // bio
    push();
    textSize(25);
    textAlign(LEFT);
    fill(0);
    text('woocha_29', 260, 90);
    textSize(15);
    text('게시물', 260, 135);
    text('팔로워', 350, 135);
    text('팔로우', 440, 135);

    text('종강하고싶다ㅏㅏㅏ', 260, 195);

    textFont(boldFont);
    text('김소현', 260, 175)
    text('6', 310, 135);
    text('237', 400, 135);
    text('380', 490, 135);
    pop();

    // 팔로우 중
    if (followed) { 
        // 팔로우 요청 수락된 경우
        image(following, 430, 95, following.width/1.5, following.height/1.5);
    } else if (followRequested) { 
        // 팔로우 수락 대기 중
        fill(255);
        rect(410, 80, 80, 30, 10);
        fill(0);
        textSize(15);
        text('요청됨', 450, 92);
    } else {
        // 팔로우 요청 전
        fill(65, 106, 255);
        rect(410, 80, 80, 30, 10);
        fill(255);
        textSize(15);
        text('팔로우', 450, 92);
    }
}