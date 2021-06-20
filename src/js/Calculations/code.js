function ReadAndPlot(ReadType = actualInput, OutputType = 'time') {

    let a = [];
    let b = [];

    let zeros = [];
    let poles = [];

    if (ReadType == "coef") {

        let aCoeffs = document.querySelectorAll(".a-coef input[type='text']");
        let bCoeffs = document.querySelectorAll(".b-coef input[type='text']");

        aCoeffs.forEach(aCoeff => {

            a.push(parseFloat(aCoeff.value));

        })

        bCoeffs.forEach(bCoeff => {

            b.push(parseFloat(bCoeff.value));

        })
    } else if (ReadType == "zpk") {


        let zerosInputs = document.querySelectorAll(".zeros-coef input[type='text']");
        let polesInputs = document.querySelectorAll(".poles-coef input[type='text']");

        zerosInputs.forEach(zero => {
            zeros.push(math.complex(zero.value));
        })

        polesInputs.forEach(pole => {
            poles.push(math.complex(pole.value));
        })

        const Coef = getAandB(zeros, poles);
        a = Coef.a;
        b = Coef.b;
    }

    console.log("a: ", a)
    console.log("b: ", b)

    if (myChart) {
        myChart.destroy();
    }




    if (OutputType == "time") {
        chartIt(a, b);
    } else if (OutputType == "freq") {
        chartItFreq(a, b);
    } else if (OutputType == "zpmap") {
        chartItzpmap(zeros, poles);
    }


}




function getAandB(z, p) {
    // Returns a and b from z,p

    //Zeros with b

    let conv1 = [1, math.multiply(z[0], -1)];
    if (z.length > 1) {
        for (let i = 1; i < z.length; i++) {
            conv1 = convolution(conv1, [1, math.multiply(z[i], -1)]);
        }
    }
    let b = conv1.map(x => {
        if (typeof x == 'object') {
            return x.re;
        } else {
            return x;
        }
    });


    // Poles with a
    let conv2 = [1, math.multiply(p[0], -1)];
    if (p.length > 1) {
        for (let i = 1; i < p.length; i++) {
            conv2 = convolution(conv2, [1, math.multiply(p[i], -1)]);
        }
    }
    let a = conv2.map(x => {
        if (typeof x == 'object') {
            return x.re;
        } else {
            return x;
        }
    });

    //with a and b return data
    return {
        a,
        b
    }

}




// Convolution Code

Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};

function convolution(x, y) {

    let output = new Array(x.length + y.length - 1).fill(0);


    for (let data = 0; data < y.length - 1; data++) {
        x.push(0)
        x.insert(0, 0);
    }
    for (let i = 0; i < output.length; i++) {
        output[i] = math.dot(x.slice(0 + i, y.length + i), y.reverse());
        y.reverse();
    }

    return output
}