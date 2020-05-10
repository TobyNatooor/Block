
window.onload = function () {
    let canvas = document.getElementById("GameScreen");
    let context = canvas.getContext('2d');
    let blockHeight = 50;
    let blockWidth = 50;
    let coord = { x: 100, y: 100 };
    let bullet = { x: 0, y: 0 };
    let speed = parseInt(document.getElementById("speed").value);
    let theX = document.getElementById("theX");
    let theY = document.getElementById("theY");
    let labelSpeed = document.getElementById("labelSpeed");
    let lastPushedKey;
    let swapVar;

    posistion();
    labelSpeed.innerHTML = "Speed: " + speed;

    // Move the Red block using keys
    //Left
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37 || event.keyCode == 65) {
            console.log("Left");
            lastPushedKey = "left";
            coord.x -= speed;
            posistion();
        }
    });
    //Up
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 38 || event.keyCode == 87) {
            lastPushedKey = "up";
            console.log("Up");
            coord.y -= speed;
            posistion();
        }
    });
    //Right
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39 || event.keyCode == 68) {
            lastPushedKey = "right";
            console.log("Right");
            coord.x += speed;
            posistion();
        }
    });
    //Down
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 40 || event.keyCode == 83) {
            lastPushedKey = "down";
            console.log("Down");
            coord.y += speed;
            posistion();
        }
    });

    //Writes and changes the speed 
    document.getElementById("speed").addEventListener('change', function () {
        labelSpeed.innerHTML = "Speed: " + document.getElementById("speed").value;
        speed = parseInt(document.getElementById("speed").value);
        console.log("changed speed to " + speed);
    });

    function posistion() {
        //Clears the block
        context.clearRect(0, 0, 800, 600);
        // Write x and y
        theX.innerHTML = "X: " + coord.x;
        theY.innerHTML = "Y: " + coord.y;
        //Border 
        obstacle(0, 0, 800, 2);
        obstacle(0, 0, 2, 600);
        obstacle(0, 598, 800, 600);
        obstacle(798, 0, 800, 600);
        // // //obstacles 
        obstacle(300, 20, 320, 60);
        obstacle(400, 20, 420, 60);
        obstacle(350, 60, 370, 80);
        obstacle(300, 160, 420, 180);
        obstacle(400, 140, 430, 160);

        //Sets the new block 
        context.fillStyle = 'red';
        context.fillRect(coord.x, coord.y, blockWidth, blockHeight);
    }

    pistol(50, 400);

    function obstacle(x1, y1, x2, y2) {
        context.fillStyle = 'gray';
        context.fillRect(x1, y1, x2 - x1, y2 - y1);
        if (border(x1, y1, x2, y2)) {
            console.log("obstacle!");
            keys();
        }
    }

    function pistol(x1, y1) {
        x2 = x1 + 25;
        y2 = y1 + 25;
        setInterval(function () {
            context.clearRect((x1 + 5 + bullet.x - 4), (y1 + 5 + bullet.y), 15, 15)
            obstacle(x1, y1, x2, y2)
            context.fillStyle = "green";
            context.fillRect(x1 + 5 + bullet.x, y1 + 5 + bullet.y, 15, 15);
            bullet.x += 4;
            if (border(x1 + 5 + bullet.x, y1 + 5 + bullet.y, x1 + 5 + bullet.x + 15, y1 + 5 + bullet.y + 15)) {
                coord.x = 100;
                coord.y = 100;
            }
        }, 100);
    }


    function border(x1, y1, x2, y2) {
        if (x1 > x2) {
            swapVar = x2;
            x2 = x1;
            x1 = swapVar;
        }
        if (y1 > y2) {
            swapVar = y2;
            y2 = y1;
            y1 = swapVar;
        }
        if (x1 < coord.x + blockWidth &&
            x2 > coord.x &&
            y1 < coord.y + blockHeight &&
            y2 > coord.y) {
            return true;
        }
    }

    function keys() {
        if (lastPushedKey == "right") {
            coord.x--;
            posistion();
        }
        if (lastPushedKey == "left") {
            coord.x++;
            posistion();
        }
        if (lastPushedKey == "up") {
            coord.y++;
            posistion();
        }
        if (lastPushedKey == "down") {
            coord.y--;
            posistion();
        }
    }
}

