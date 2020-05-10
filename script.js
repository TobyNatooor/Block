
window.onload = function () {
    let speed = parseInt(document.getElementById("speed").value);
    let theX = document.getElementById("theX");
    let theY = document.getElementById("theY");
    let labelSpeed = document.getElementById("labelSpeed");
    let timer = document.getElementById("timer");

    let canvas = document.getElementById("GameScreen");
    let context = canvas.getContext('2d');
    let blockHeight = 50;
    let blockWidth = 50;
    let coord = { x: 100, y: 100 };
    let lastPushedKey;
    let swapVar;
    let time = 0;
    let bulletSpeed = 40;

    theTimer()
    posistion();
    labelSpeed.innerHTML = "Speed: " + speed;

    function theTimer() {
        setInterval(function () {
            timer.innerHTML = "Timer: " + time.toFixed(1);
            time += 0.05;
        }, 50)
    }

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
        obstacle(0, 0, 800, 0);
        obstacle(0, 0, 0, 600);
        obstacle(0, 600, 800, 600);
        obstacle(800, 0, 800, 600);
        // // //obstacles 
        pistol(700, 300, "left")
        pistol(50, 400, "up");
        pistol(50, 400, "right");
        //Sets the new block 
        context.fillStyle = 'red';
        context.fillRect(coord.x, coord.y, blockWidth, blockHeight);
    }

    function obstacle(x1, y1, x2, y2) {
        context.fillStyle = 'gray';
        context.fillRect(x1, y1, x2 - x1, y2 - y1);
        if (border(x1, y1, x2, y2)) {
            console.log("obstacle!");
            keys();
        }
    }

    function pistol(x1, y1, direction) {
        pistolUpdate(x1, y1, direction)
        setInterval(function () {
            pistolUpdate(x1, y1, direction)
        }, 100);
    }

    function pistolUpdate(x1, y1, direction) {
        let x = 0;
        let y = 0;
        let t = 0;
        let u = 0;
        let v = 0;
        let w = 0;
        if (direction == "left") {
            x = -1 * time;
            t = 5;
        }
        if (direction == "right") {
            x = 1 * time;
            u = 5;
        }
        if (direction == "up") {
            y = -1 * time;
            w = 5;
        }
        if (direction == "down") {
            y = +1 * time;
            v = 5;
        }
        if (border(
            x1 + 5 + x * bulletSpeed,
            y1 + 5 + y * bulletSpeed,
            x1 + 5 + x * bulletSpeed + 15,
            y1 + 5 + y * bulletSpeed + 15
        )) {
            coord.x = 100;
            coord.y = 100;
            posistion();
        }
        x2 = x1 + 25;
        y2 = y1 + 25;
        context.clearRect(
            x1 + 5 + x * bulletSpeed - u, 
            y1 + 5 + y * bulletSpeed - v, 
            15 + t, 15 + w);
        obstacle(x1, y1, x2, y2);
        context.fillStyle = "green";
        context.fillRect(
            x1 + 5 + x * bulletSpeed, 
            y1 + 5 + y * bulletSpeed, 
            15, 15);
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

