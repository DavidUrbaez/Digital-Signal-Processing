document.getElementById("add-complex-pole").onclick = function() {
    poles_complex.push(new Draggable(width / 2, height / 2, 15, 'x', true));
};

document.getElementById("remove-complex-pole").onclick = function() {
    poles_complex.pop();
};

document.getElementById("add-real-pole").onclick = function() {
    poles_real.push(new Draggable(width / 2, height / 2, 15, 'x', false));
};

document.getElementById("remove-real-pole").onclick = function() {
    poles_real.pop();
};

// Zeros

document.getElementById("add-complex-zero").onclick = function() {
    zeros_complex.push(new Draggable(width / 2, height / 2, 15, 'o', true));
};

document.getElementById("remove-complex-zero").onclick = function() {
    zeros_complex.pop();
};

document.getElementById("add-real-zero").onclick = function() {
    zeros_real.push(new Draggable(width / 2, height / 2, 15, 'o', false));
};

document.getElementById("remove-real-zero").onclick = function() {
    zeros_real.pop();
};

////////////////////////////////////////////////////////////////////////////



function returnZP(zeros_real, zeros_complex, poles_real, poles_complex) {

    let zeros = []
    let poles = []


    for (let index = 0; index < zeros_real.length; index++) {
        zeros.push(math.complex(zeros_real[index].re, 0))
    }

    for (let index = 0; index < zeros_complex.length; index++) {
        zeros.push(math.complex(zeros_complex[index].re, zeros_complex[index].im))
        zeros.push(math.complex(zeros_complex[index].re, math.multiply(zeros_complex[index].im, -1)))
    }

    for (let index = 0; index < poles_real.length; index++) {
        poles.push(math.complex(poles_real[index].re, 0))
    }

    for (let index = 0; index < poles_complex.length; index++) {
        poles.push(math.complex(poles_complex[index].re, poles_complex[index].im))
        poles.push(math.complex(poles_complex[index].re, math.multiply(poles_complex[index].im, -1)))
    }
    zeros = zeros.map(x => math.multiply(x, 1 / factor));
    poles = poles.map(x => math.multiply(x, 1 / factor));
    return {
        zeros,
        poles
    }
}