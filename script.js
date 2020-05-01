
window.onload = function() {
    let canvas = document.getElementById("GameScreen");
    let context = canvas.getContext('2d');

    var leftRight = 400;
    var upDown = 300;
    var Speed = 1;

    context.clearRect(0, 0, 800, 600);

    context.fillStyle = 'red';
    context.fillRect(leftRight, upDown, 100, 100);

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37 || event.keyCode == 65) {
            leftRight -= Speed;
            console.log(leftRight);
            context.clearRect(0, 0, 800, 600);
            context.fillStyle = 'red';
            context.fillRect(leftRight, upDown, 100, 100);
            posistion();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 38 || event.keyCode == 87) {
            upDown -= Speed;
            context.clearRect(0, 0, 800, 600);
            context.fillStyle = 'red';
            context.fillRect(leftRight, upDown, 100, 100);
            posistion();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39 || event.keyCode == 68) {
            leftRight += Speed;
            console.log(leftRight);
            context.clearRect(0, 0, 800, 600);
            context.fillStyle = 'red';
            context.fillRect(leftRight, upDown, 100, 100);
            posistion();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 40 || event.keyCode == 83) {
            upDown += Speed;
            context.clearRect(0, 0, 800, 600);
            context.fillStyle = 'red';
            context.fillRect(leftRight, upDown, 100, 100);
            posistion();
        }
    });

    function posistion() {
        var theX = document.getElementById("theX");
        theX.innerHTML = leftRight;
         var theY = document.getElementById("theY");
        theY.innerHTML = upDown;
    }

    document.addEventListener("change", function(){
        Speed = document.getElementById("Speed").value;
        console.log(Speed);
    })

}

