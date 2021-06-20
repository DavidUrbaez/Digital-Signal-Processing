async function getPZData(values) {
    let outData = []

    values.forEach(value => {
        outData.push({
            x: Number(value.re.toFixed(3)).toString(),
            y: Number(value.im.toFixed(3)).toString()
        });

    })
    return outData
}