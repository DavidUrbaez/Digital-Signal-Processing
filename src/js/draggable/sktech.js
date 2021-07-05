let img;

let zeros_complex = [];
let poles_complex = [];

let zeros_real = [];
let poles_real = [];
let factor;

let prevFactor;
let prevHalfWindowSize;

function setup() {
    rectMode(CENTER);

    if (windowWidth > 500) {
        factor = 150;
        var myCanvas = createCanvas(400, 400);

        prevFactor = 150
        prevHalfWindowSize = 200;
    } else {
        factor = 100;
        var myCanvas = createCanvas(250, 250);

        prevFactor = 100
        prevHalfWindowSize = 150;
    }

    myCanvas.parent("DraggableDiv");
    img = loadImage('src/img/cross.png');


    zeros_complex.push(new Draggable(factor * 0.9896 + width / 2, height / 2 - factor * 0.144, 20, 'o', true));
    zeros_real.push(new Draggable(factor * 1 + width / 2, height / 2, 20, 'o', false));



    poles_complex.push(new Draggable(55.37 + width / 2, height / 2 - 42.43, 20, 'x', true));
    poles_real.push(new Draggable(47.27 + width / 2, height / 2, 20, 'x', false));

}

function draw() {
    drawBack();

    translate(-width / 2, -height / 2);

    for (let i = 0; i < zeros_complex.length; i++) {
        // zeros_complex[i].over();
        zeros_complex[i].update();
        zeros_complex[i].show();
    }

    for (let i = 0; i < poles_complex.length; i++) {
        // poles_complex[i].over();
        poles_complex[i].update();
        poles_complex[i].show();
    }

    for (let i = 0; i < zeros_real.length; i++) {
        // zeros_real[i].over();
        zeros_real[i].update();
        zeros_real[i].show();
    }

    for (let i = 0; i < poles_real.length; i++) {
        // poles_real[i].over();
        poles_real[i].update();
        poles_real[i].show();
    }
    //translate(width / 2, height / 2);

    // console.log(pmouseY);

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


    // Update Plot - - IMPORTANT!!
    if (pmouseX > 0 && pmouseX < width && pmouseY > 0 && pmouseY < height) { // If in window
        if (document.querySelector("#btn-freq").classList.value == "active") {
            ReadAndPlot("zpk-map", "freq");
        } else {
            ReadAndPlot("zpk-map", "time");
        }
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

    let ratio = width / 20;

    for (let i = -10; i <= 10; i++) {

        line(ratio * i, -height / 2, ratio * i, height / 2);
        line(-width / 2, ratio * i, width / 2, ratio * i);
    }

    strokeWeight(1);
    fill(0, 255, 0, 20);
    ellipse(0, 0, factor * 2);
}



function windowResized() {


    const zpk = zeros_complex.concat(zeros_real).concat(poles_complex).concat(poles_real);

    if (windowWidth < 500) {

        factor = 100;

        resizeCanvas(250, 250);


        for (let i = 0; i < zpk.length; i++) {

            zpk[i].x = width / 2 + (zpk[i].x - prevHalfWindowSize) * factor / prevFactor;
            zpk[i].y = height / 2 - (prevHalfWindowSize - zpk[i].y) * factor / prevFactor;
        }


        prevFactor = 100;
        prevHalfWindowSize = 125;


    } else {

        factor = 150;

        resizeCanvas(400, 400);

        for (let i = 0; i < zpk.length; i++) {

            zpk[i].x = width / 2 + (zpk[i].x - prevHalfWindowSize) * factor / prevFactor;
            zpk[i].y = height / 2 - (prevHalfWindowSize - zpk[i].y) * factor / prevFactor;

        }


        prevFactor = 150;
        prevHalfWindowSize = 200;

    }

}