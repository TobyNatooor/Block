
window.onload = function () {
    let speed = parseInt(document.getElementById("speed").value);
    let theX = document.getElementById("theX");
    let theY = document.getElementById("theY");
    let labelSpeed = document.getElementById("labelSpeed");
    let timer = document.getElementById("timer");
    let canvas = document.getElementById("GameScreen");
    let context = canvas.getContext('2d');
    let lastPushedKey;
    let swapVar;
    let time = 0;
    let num = 0;
    alertOnce = 0;
    let distance = [0];

    // adjustable 
    let coord = { x: 70, y: 470 };
    let blockHeight = 75;
    let blockWidth = 75;
    let bulletSpeed = 40;



    theTimer()
    posistion();
    labelSpeed.innerHTML = "Speed: " + speed;
    // The timer
    function theTimer() {
        setInterval(function () {
            timer.innerHTML = "Timer: " + time.toFixed(1);
            time += 0.2;
        }, 200)
    }
    // Move the Red block using keys
    //Left
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37 || event.keyCode == 65) {
            lastPushedKey = "left";
            coord.x -= speed;
            posistion();
        }
    });
    //Up
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 38 || event.keyCode == 87) {
            lastPushedKey = "up";
            coord.y -= speed;
            posistion();
        }
    });
    //Right
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39 || event.keyCode == 68) {
            lastPushedKey = "right";
            coord.x += speed;
            posistion();
        }
    });
    //Down
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 40 || event.keyCode == 83) {
            lastPushedKey = "down";
            coord.y += speed;
            posistion();
        }
    });
    // Writes and changes the speed 
    document.getElementById("speed").addEventListener('change', function () {
        labelSpeed.innerHTML = "Speed: " + document.getElementById("speed").value;
        speed = parseInt(document.getElementById("speed").value);
        console.log("changed speed to " + speed);
    });

    function posistion() {
        // Clears the block
        context.clearRect(0, 0, 800, 600);
        // Write x and y
        theX.innerHTML = "X: " + coord.x;
        theY.innerHTML = "Y: " + coord.y;
        // Border 
        obstacle(0, 0, 800, 0);
        obstacle(0, 0, 0, 600);
        obstacle(0, 600, 800, 600);
        obstacle(800, 0, 800, 600);
        // Obstacles 
        obstacle(0, 400, 450, 380)
        obstacle(450, 380, 430, 230)
        obstacle(200, 150, 220, 290)
        pistol(150, 130, "up")
        pistol(300, 130, "up")
        pistol(400, 130, "up")
        pistol(500, 130, "up")
        pistol(550, 130, "up")
        pistol(600, 130, "up")
        pistol(750, 0, "down")
        obstacle(150, 155, 715, 135)
        obstacle(715, 135, 695, 500)
        obstacle(580, 600, 600, 150)
        // Sets the new block 
        context.fillStyle = 'red';
        context.fillRect(coord.x, coord.y, blockWidth, blockHeight);
    }
    // Makes a solid block
    function obstacle(x1, y1, x2, y2) {
        context.fillStyle = 'gray';
        context.fillRect(x1, y1, x2 - x1, y2 - y1);
        if (border(x1, y1, x2, y2)) {
            console.log("obstacle!");
            keys();
        }
    }
    // Makes a pistol
    function pistol(x1, y1, direction) {
        pistolCreate(x1, y1, direction)
        setInterval(function () {
            pistolCreate(x1, y1, direction)
        }, 150);
    }
    // Creates the pistol and bullets
    function pistolCreate(x1, y1, direction) {
        let x = 0;
        let y = 0;
        let t = 0;
        let u = 0;
        let v = 0;
        let w = 0;
        if (time.toFixed(1) == num) {
            num += 5;
            distance.push(num - 5)
        }
        for (i = 0; i < distance.length; i++) {
            if (direction == "left") {
                x = -time + distance[i];
                t = 8;
            }
            if (direction == "right") {
                x = time - distance[i];
                u = 8;
            }
            if (direction == "up") {
                y = -time + distance[i];
                w = 8;
            }
            if (direction == "down") {
                y = time - distance[i];
                v = 8;
            }
            if (border(
                x1 + 5 + x * bulletSpeed,
                y1 + 5 + y * bulletSpeed,
                x1 + 5 + x * bulletSpeed + 15,
                y1 + 5 + y * bulletSpeed + 15
            )) {
                coord.x = 70;
                coord.y = 470;
                posistion();
            }
            if (coord.x < 620 && coord.x > 599 &&
                coord.y < 300 && coord.y > 160 && alertOnce == 0) {
                    alertOnce++;
                    alert("You Win!");
                }
            x2 = x1 + 25;
            y2 = y1 + 25;
            context.clearRect(
                x1 + 5 + x * bulletSpeed - u,
                y1 + 5 + y * bulletSpeed - v,
                15 + t, 15 + w);
            context.fillStyle = "green";
            context.fillRect(
                x1 + 5 + x * bulletSpeed,
                y1 + 5 + y * bulletSpeed,
                15, 15);
        }
        obstacle(x1, y1, x2, y2);
    }
    // Makes the solid border of obstacles
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
    // Moves main block
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

