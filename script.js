
window.onload = function () {
    let canvas = document.getElementById("GameScreen");
    let context = canvas.getContext('2d');
    var leftRight = 400;
    var upDown = 300;
    var Speed = parseInt(document.getElementById("Speed").value);

    context.fillStyle = 'red';
    posistion();

    // Move the Red block using keys
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37 || event.keyCode == 65) {
            leftRight -= Speed;
            posistion();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 38 || event.keyCode == 87) {
            upDown -= Speed;
            posistion();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39 || event.keyCode == 68) {
            leftRight += Speed;
            posistion();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 40 || event.keyCode == 83) {
            upDown += Speed;
            posistion();
        }
    });

    function posistion() {
        //Move the red block with keys
        context.clearRect(0, 0, 800, 600);
        context.fillRect(leftRight, upDown, 100, 100);
        // Write x and y
        var theX = document.getElementById("theX");
        theX.innerHTML = "X: " + leftRight;
        var theY = document.getElementById("theY");
        theY.innerHTML = "Y: " + upDown;
        //Stops at the border
        //switch
    }

    

}
