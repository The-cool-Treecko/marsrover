canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
rover_x = 20;
rover_y = 20;
BGimage = "mars.jpg";
RoverImage = "rover.png";

function addSprites(){
    bg = new Image();
    bg.onload = setBG;
    bg.src = BGimage;
    rover = new Image();
    rover.onload = setRover;
    rover.src = RoverImage;     
}

function setBG(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}

function setRover(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",keyDown);

function keyDown(e){
    KeyPressed= e.keyCode;
    console.log(KeyPressed);
    if (keyPressed == '38'){
        Up();
        console.log("up")
    }
    if (keyPressed == '40'){
        Down();
        console.log("down")
    }
    if (keyPressed == '37'){
        Left();
        console.log("left");
    }
    if (keyPressed == '39'){
        Right();
        console.log("right");
    }
}