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

    zeros_real.forEach(zero => {
        zeros.push(math.complex(zero[0].re, 0))
    });

    zeros_complex.forEach(zero => {
        zeros.push(math.complex(zero.re, zero.im))
        zeros.push(math.complex(zero.re, -zero.im))
    });

    poles_real.forEach(pole => {
        poles.push(math.complex(pole.re, 0))
    });

    poles_complex.forEach(pole => {
        poles.push(math.complex(pole.re, pole.im))
        poles.push(math.complex(pole.re, -pole.im))
    });
    return {
        zeros,
        poles
    }
}