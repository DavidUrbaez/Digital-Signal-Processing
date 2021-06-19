async function getData() {
    const b = [0.48, -1.43, 1.43, -0.48];
    const a = [-1.58, 1.01 - 0.23];

    const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const ys = [];


    xs.forEach(row => {
        ys.push(Math.sin(row));

    })

    return {
        xs,
        ys
    };
}