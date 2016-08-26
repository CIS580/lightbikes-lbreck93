var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var speed = 1/16/1000;

var x=0, y=0;

var input = {
    up: false,
    down:false,
    left: false,
    right: false
}

window.onkeydown = function(event) {
    console.log(event.keyCode);
    switch(event.keyCode){
        //up
        case 38:
        case 87:
            input.up = true;
            break;

        //left
        case 37:
        case 65:
            input.left = true;
            break;

        //right
        case 39:
        case 68:
            input.right = true;
            break;

        //down
        case 40:
        case 83:
            input.down = true;
            break;
    }
};

window.onkeyup = function(event) {
    console.log(event.keyCode);
    switch(event.keyCode){
        //up
        case 38:
        case 87:
            input.up = false;
            break;

        //left
        case 37:
        case 65:
            input.left = false;
            break;

        //right
        case 39:
        case 68:
            input.right = false;
            break;

        //down
        case 40:
        case 83:
            input.down = false;
            break;
    }
};

function loop(){
    context.fillRect(x, y, 10, 10);
    if (input.up && y > 0) { y-- }
    if (input.down && y <= canvas.height) { y++ }
    if (input.left) { x-- }
    if (input.right) { x++ }
    setTimeout(loop, speed);
}
loop();