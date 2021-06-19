async function getData(a, b) {



    // const a = [1, -0.2, -0.25, 0.05];
    // const b = [2, 1.5];

    // const a = [1.0000, -1.1480, 1.5107, 0.2703]
    // const b = [0.1808, 0.1047, 0.3107, 0.1047, 0.1808]

    const N = 70;
    let xs = new Array(N).fill(0);

    if (b.length > a.length) {
        xs = new Array(N + b.length).fill(0);
    }

    let ys = new Array(N).fill(0);

    xs[b.length - 1] = 1;
    for (let index = 0; index < N - a.length; index++) {
        ys[index + a.length - 1] = math.dot(b.slice().reverse(), xs.slice(index, b.length + index)) + math.dot(ys.slice(index, index + a.length - 1), a.slice(1).reverse().map(x => x * -1))
    }


    const maxVal = parseFloat(document.querySelector(".controls input[type='text']").value);
    xs = math.range(0, maxVal)._data;
    ys = ys.slice(a.length - 1, maxVal + a.length - 1);
    // console.log(a.length);
    // console.log(xs.length, ys.length);
    return {
        xs,
        ys
    };
}

function ReadAndPlot() {
    let a = [];
    let b = [];
    let aCoeffs = document.querySelectorAll(".a-coef input[type='text']");
    let bCoeffs = document.querySelectorAll(".b-coef input[type='text']");

    aCoeffs.forEach(aCoeff => {
        a.push(parseFloat(aCoeff.value));
        console.log(aCoeff.value);
    })

    bCoeffs.forEach(bCoeff => {
        b.push(parseFloat(bCoeff.value));
    })



    if (myChart) {
        myChart.destroy();
    }


    chartIt(a, b);
}