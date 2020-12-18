class Feed {
    // imageMode: 기본(CENTER x)

    constructor(img, text, x, y) {
        this.img = img;
        this.text = text;
        this.x = x;
        this.y = y;
        this.like = Math.floor(Math.random() * 100);
        this.liked = false;
    }

    over() {
        return mouseOver('l', this.x, this.y, 200, 200);
    }

    showThumb() {
        push();
        imageMode(CORNER);
        image(this.img, this.x, this.y, 200, 200);
        pop();
    }

    showFull() {
        //모달
        fill(0, 0, 0, 95);
        rect(0, 230, 720, 720);
        fill(255);
        rect(60, 275, 600, 400);

        // X버튼
        push();
        stroke(255);
        strokeWeight(3);
        line(660, 270, 680, 250);
        line(660, 250, 680, 270);
        pop();

        // 피드 내용
        push();
        noFill();
        stroke(200);
        rect(60, 275, 400, 400);
        rect(460, 275, 200, 80);
        rect(460, 575, 200, 100);
        pop();
        image(this.img, 260, 475, 400, 400);

        image(myProfile, 495, 315, 40, 40);
        image(myProfile, 495, 400, 40, 40);

        push();
        textFont(boldFont);
        textSize(15);
        fill(0);
        text('woocha_29', 565, 310);
        text('woocha_29', 565, 395);
        textSize(9);
        text('- 팔로잉', 630, 311);
        textSize(15);
        textAlign(LEFT, TOP);
        text(`좋아요 ${this.like}개`, 475, 620);
        textFont(basicFont);
        text(`${this.text}`, 480, 430);
        textSize(10);
        fill(220, 50);
        text('20시간 전', 475, 650);
        pop();

        // 라이크, DM 버튼
        if (this.liked) {
            image(liked, 485, 595, 30, 30);
        } else {
            image(noti, 485, 595, 30, 30);
        }

        image(dm, 520, 595, 28, 28);


    }
}