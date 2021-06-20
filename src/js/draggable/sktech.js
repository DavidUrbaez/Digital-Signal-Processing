let img;

let zeros_complex = [];
let poles_complex = [];

let zeros_real = [];
let poles_real = [];

function setup() {
    rectMode(CENTER);
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent("DraggableDiv");
    img = loadImage('src/img/cross.png');

    zeros_complex.push(new Draggable(98.96 + width / 2, height / 2 - 14.4, 20, 'o', true));
    zeros_real.push(new Draggable(100 + width / 2, height / 2, 20, 'o', false));



    poles_complex.push(new Draggable(55.37 + width / 2, height / 2 - 42.43, 20, 'x', true));
    poles_real.push(new Draggable(47.27 + width / 2, height / 2, 20, 'x', false));

}

function draw() {
    drawBack();

    translate(-width / 2, -height / 2);

    for (let i = 0; i < zeros_complex.length; i++) {
        zeros_complex[i].over();
        zeros_complex[i].update();
        zeros_complex[i].show();
    }

    for (let i = 0; i < poles_complex.length; i++) {
        poles_complex[i].over();
        poles_complex[i].update();
        poles_complex[i].show();
    }

    for (let i = 0; i < zeros_real.length; i++) {
        zeros_real[i].over();
        zeros_real[i].update();
        zeros_real[i].show();
    }

    for (let i = 0; i < poles_real.length; i++) {
        poles_real[i].over();
        poles_real[i].update();
        poles_real[i].show();
    }
    //translate(width / 2, height / 2);

    //console.log(pmouseX - width / 2);

}

function mousePressed() {
    for (let i = 0; i < zeros_complex.length; i++) {
        zeros_complex[i].pressed();
    }
    for (let i = 0; i < poles_complex.length; i++) {
        poles_complex[i].pressed();
    }
    for (let i = 0; i < zeros_real.length; i++) {
        zeros_real[i].pressed();
    }
    for (let i = 0; i < poles_real.length; i++) {
        poles_real[i].pressed();
    }
    //shape2.pressed();
}

function mouseReleased() {
    for (let i = 0; i < zeros_complex.length; i++) {
        zeros_complex[i].released();
    }
    for (let i = 0; i < poles_complex.length; i++) {
        poles_complex[i].released();
    }
    for (let i = 0; i < zeros_real.length; i++) {
        zeros_real[i].released();
    }
    for (let i = 0; i < poles_real.length; i++) {
        poles_real[i].released();
    }
    if (document.querySelector("#btn-freq").classList.value == "active") {
        ReadAndPlot("zpk-map", "freq");
    } else {
        ReadAndPlot("zpk-map", "time");
    }

    //shape2.released();
}

function drawBack() {
    background(0);

    translate(width / 2, height / 2);

    stroke(255);
    strokeWeight(3);
    line(0, -height / 2, 0, height / 2);
    line(-width / 2, 0, width / 2, 0);
    strokeWeight(0.1);
    let ratio = 20; //1000 px -> 1

    for (let i = -10; i <= 10; i++) {

        line(ratio * i, -height / 2, ratio * i, height / 2);
        line(-width / 2, ratio * i, width / 2, ratio * i);
    }
    strokeWeight(1);
    fill(0, 255, 0, 20);
    ellipse(0, 0, 200);
}