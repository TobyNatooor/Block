
window.onload = function () {
    let canvas = document.getElementById("GameScreen");
    let context = canvas.getContext('2d');
    let coord = [
        leftRight = 0,
        upDown = 0
    ];
    let speed = document.getElementById("Speed");
    let theX = document.getElementById("theX");
    let theY = document.getElementById("theY");
    let htmlSpeed = document.getElementById("htmlSpeed");

    let btnRight = true;
    let btnLeft = true;
    let btnTop = true;
    let btnDown = true;

    posistion();
    htmlSpeed.innerHTML = "Speed: " + parseInt(speed.value);

    // Move the Red block using keys
    //Left
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37 || event.keyCode == 65) {
            btnRight = true;
            btnTop = true;
            btnDown = true;
            if (btnLeft) {
                console.log("Left")
                coord[0] -= parseInt(speed.value);
                posistion();
            }
        }
    });
    //Up
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 38 || event.keyCode == 87) {
            btnRight = true;
            btnLeft = true;
            btnDown = true;
            if (btnTop) {
                console.log("Up")
                coord[1] -= parseInt(speed.value);
                posistion();
            }
        }
    });
    //Right
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39 || event.keyCode == 68) {
            btnLeft = true;
            btnTop = true;
            btnDown = true;
            if (btnRight) {
                console.log("Right")
                coord[0] += parseInt(speed.value);
                posistion();
            }
        }
    });
    //Down
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 40 || event.keyCode == 83) {
            btnRight = true;
            btnLeft = true;
            btnTop = true;
            if (btnDown) {
                console.log("Down")
                coord[1] += parseInt(speed.value);
                posistion();
            }
        }
    });

    function posistion() {
        //Clears the block
        context.clearRect(0, 0, 800, 600);
        //Within border
        obstacle(100, 200, 200, 400)
        // Write x and y
        theX.innerHTML = "X: " + coord[0];
        theY.innerHTML = "Y: " + coord[1];
        //Sets the new block 
        context.fillStyle = 'red';
        context.fillRect(coord[0], coord[1], 100, 100);
    }

    //Writes the speed 
    speed.addEventListener('change', function () {
        htmlSpeed.innerHTML = "Speed: " + parseInt(speed.value);
    });

    function obstacle(firstX, firstY, secondX, secondY) {
        context.fillStyle = 'gray';
        context.fillRect(firstX, firstY, secondX - firstX, secondY - firstY)
        let borderArrayX = [];
        let borderArrayY = [];
        borderArrayX.push("empty")
        /*
        for (i = 0; i < secondX; i++) {
            borderArrayX.push(i + 1);
            //Top
            if (coord[0] == borderArrayX[i]) {
                for (z = -parseInt(Speed.value); z < parseInt(Speed.value); z++) {
                    if (coord[1] + z == firstY - 100) {
                        console.log("borderTop")
                        btnDown = false;
                    }
                }
            }
            //Down
            if (coord[0] == borderArrayX[i]) {
                for (z = -parseInt(Speed.value); z < parseInt(Speed.value); z++) {
                    if (coord[1] == secondY) {
                        console.log("borderDown")
                        btnTop = false;
                    }
                }
            }
        }
        */
      
        borderArrayY.push("empty")
        for (i = 0; i < secondY; i++) {
            borderArrayY.push(i + 1);
            //Left
            if (coord[1] == borderArrayY[i]) { //doesn't pass
                for (z = -parseInt(Speed.value); z < parseInt(Speed.value); z++) {
                    if (coord[0] + z == firstX - 100) {
                        console.log("borderLeft")
                        btnRight = false;
                    }
                }
            }
             /*
            //Right
            if (coord[1] == borderArrayY[i]) {
                for (z = -parseInt(Speed.value); z < parseInt(Speed.value); z++) {
                    if (coord[0] == secondX) {
                        console.log("borderRight")
                        btnLeft = false;
                    }
                }
            }
            */
        }
        
    }

}

/*
Use of mozImageSmoothingEnabled is deprecated. Please use the unprefixed imageSmoothingEnabled property instead.
The ‘content’ attribute of Window objects is deprecated.  Please use ‘window.top’ instead.
onmozfullscreenchange is deprecated.
onmozfullscreenerror is deprecated.
*/
