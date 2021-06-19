async function getData() {

    const a = [1, -1.58, 1.01, -0.23];
    const b = [0.48, -1.43, 1.43, -0.48];

    const N = 70;
    const xs = new Array(N).fill(0);
    const ys = new Array(N).fill(0);

    xs[b.length - 1] = 1;
    for (let index = 0; index < N; index++) {
        ys[index + a.length] = math.dot(b.reverse(), xs.slice(index, b.length + index)) + math.dot(ys.slice(index, index + a.length - 1), a.slice(1).reverse().map(x => x * -1))
    }


    return {
        xs,
        ys
    };
}