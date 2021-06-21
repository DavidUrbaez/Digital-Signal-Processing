async function getFrequencyResponseData(a, b) {



    // const a = [1, -0.2, -0.25, 0.05];
    // const b = [2, 1.5];

    // const a = [1.0000, -1.1480, 1.5107, 0.2703]
    // const b = [0.1808, 0.1047, 0.3107, 0.1047, 0.1808]




    f = math.range(0, 0.5, 0.001)._data;
    let output = [];
    f.forEach(frec => {
        let z = math.complex({ r: 1, phi: 2 * Math.PI * frec });
        let num = 0.0;
        let den = 0.0;

        for (let index = 0; index < b.length; index++) {

            num = math.add(math.multiply(math.pow(z, index), b[index]), num);

        }

        for (let index = 0; index < a.length; index++) {

            den = math.add(math.multiply(math.pow(z, index), a[index]), den);

        }

        let val = math.divide(num, den);


        output.push(val.abs());



    })

    return {
        f,
        output
    };
}