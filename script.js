
window.onload = function () {
    let canvas = document.getElementById("GameScreen");
    let context = canvas.getContext('2d');
    var leftRight = 400;
    var upDown = 300;
    var Speed = document.getElementById("Speed");
    var theX = document.getElementById("theX");
    var theY = document.getElementById("theY");
    var htmlSpeed = document.getElementById("htmlSpeed");

    context.fillStyle = 'red';
    posistion();
    htmlSpeed.innerHTML = "Speed: " + parseInt(Speed.value);

    // Move the Red block using keys
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37 || event.keyCode == 65) {
            leftRight -= parseInt(Speed.value);
            posistion();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 38 || event.keyCode == 87) {
            upDown -= parseInt(Speed.value);
            posistion();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39 || event.keyCode == 68) {
            leftRight += parseInt(Speed.value);
            posistion();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 40 || event.keyCode == 83) {
            upDown += parseInt(Speed.value);
            posistion();
        }
    });

    function posistion() {
        //Clears the block
        context.clearRect(0, 0, 800, 600);
        //Within border
        if (leftRight > 700) {
            leftRight = 700;
        }
        if (leftRight < 0) {
            leftRight = 0;
        }
        if (upDown > 500) {
            upDown = 500;
        }
        if (upDown < 0) {
            upDown = 0;
        }
        // Write x and y
        theX.innerHTML = "X: " + leftRight;
        theY.innerHTML = "Y: " + upDown;
        //Sets the new block 
        context.fillRect(leftRight, upDown, 100, 100);
    }

    //Writes the speed 
    Speed.addEventListener('change', function() {
        htmlSpeed.innerHTML = "Speed: " + parseInt(Speed.value);
    });

}
