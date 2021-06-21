async function getResponseData(a, b) {

    // const a = [1, -0.2, -0.25, 0.05];
    // const b = [2, 1.5];

    // const a = [1.0000, -1.1480, 1.5107, 0.2703]
    // const b = [0.1808, 0.1047, 0.3107, 0.1047, 0.1808]

    const N = parseFloat(document.getElementById("maxTime").value) + a.length + b.length;
    let xs = new Array(N).fill(0);

    if (b.length > a.length) {
        xs = new Array(N + b.length).fill(0);
    }

    let ys = new Array(N).fill(0);

    xs[b.length - 1] = 1;
    for (let index = 0; index < N - a.length; index++) {
        if (a.length > 1) { // Normal Calculation Direct Form I

            ys[index + a.length - 1] = math.dot(b.slice().reverse(), xs.slice(index, b.length + index)) + math.dot(ys.slice(index, index + a.length - 1), a.slice(1).reverse().map(x => x * -1))

        } else { // No poles solution

            ys[index + a.length - 1] = math.dot(b.slice().reverse(), xs.slice(index, b.length + index))

        }
    }


    const maxVal = parseFloat(document.getElementById("maxTime").value) + 1;
    // const maxVal = 15;
    xs = math.range(0, maxVal)._data;
    ys = ys.slice(a.length - 1, maxVal + a.length - 1);
    // console.log(a.length);
    // console.log(xs.length, ys.length);
    return {
        xs,
        ys
    };
}