async function getData() {
    const xs = [1, 2, 3, 4, 5, 6, 7];
    const ys = [];


    xs.forEach(row => {
        ys.push(Math.sin(row));

    })

    return {
        xs,
        ys
    };
}