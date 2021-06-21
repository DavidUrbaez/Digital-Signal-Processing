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

    // Find Mag

    zerosMag = 1;
    polesMag = 1;
    zeros.forEach(zero => {
        zerosMag *= zero.abs();
    });

    poles.forEach(pole => {
        polesMag *= pole.abs();
    });

    return {
        zeros,
        poles,
        zerosMag,
        polesMag
    }
}