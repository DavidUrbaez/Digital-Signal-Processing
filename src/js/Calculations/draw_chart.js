const a = [1, -1.58, 1.01, -0.23];
const b = [0.48, -1.43, 1.43, -0.48];

// First Run Time Domain
chartIt(a, b);

// Creat Chart Variable

var myChart;

async function chartIt(a, b) {

    const data = await getData(a, b);
    var ctx = document.getElementById('chart').getContext('2d');


    var options = {
        // responsive: true,
        // maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
                title: {
                    display: true,
                    text: 'Sample',
                    color: 'white',
                }
            },

            y: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
                title: {
                    display: true,
                    text: 'Amplitud',
                    color: 'white',
                }

            },


        },

        plugins: {
            legend: {
                display: false
            }
        }
    };


    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Filter #1',
                data: data.ys,
                backgroundColor: 'rgba(0, 255, 25, 0.4)',
                borderColor: 'rgba(0, 255, 25, 1)',
                borderWidth: 2,
                barPercentage: 0.2,
                // pointStyle: 'circle',

            }]
        },
        options: options
    });

    // myChart.destroy();
}


async function chartItFreq(a, b) {

    const data = await getFrequencyData(a, b);
    var ctx = document.getElementById('chart').getContext('2d');


    var options = {
        // responsive: true,
        // maintainAspectRatio: false,
        scales: {

            x: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                    // precision: 0.01,
                    // fixedStepSize: 0.01,
                    // format: new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }),

                    // Include a dollar sign in the ticks
                    callback: function(val, index, values) {
                        return (val * 0.001).toFixed(3);
                    }
                },
                title: {
                    display: true,
                    text: 'Frequency [f /Fs]',
                    color: 'white',
                }
            },

            y: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
                title: {
                    display: true,
                    text: 'Amplitud',
                    color: 'white',
                }
            },


        },

        plugins: {
            legend: {
                display: false
            }
        }
    };


    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.f,
            datasets: [{
                label: 'Filter #1',
                data: data.output,
                backgroundColor: 'rgba(0, 255, 25, 1)',
                borderColor: 'rgba(0, 255, 25, 1)',
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: 'origin',
                    above: 'rgba(0, 255, 25, 0.2)', // Area will be red above the origin
                    // below: 'rgba(0, 255, 25, 1)' // And blue below the origin
                }
                // pointStyle: 'line',

            }]
        },
        options: options
    });

    // myChart.destroy();
}



async function chartItzpmap(zeros, poles) {

    const dataZeros = await getPZData(zeros);
    const dataPoles = await getPZData(poles);
    var ctx = document.getElementById('chart').getContext('2d');



    var options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {

            x: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                    // precision: 0.01,
                    // fixedStepSize: 0.01,
                    // format: new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }),

                    // Include a dollar sign in the ticks
                    // callback: function(val, index, values) {
                    //     return (val * 0.001 - 2).toFixed(3).toString();
                    // }
                },
                suggestedMin: -2,
                suggestedMax: 2,
                title: {
                    display: true,
                    text: 'Real',
                    color: 'white',
                }
            },

            y: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
                suggestedMin: -2,
                suggestedMax: 2,
                title: {
                    display: true,
                    text: 'Imag',
                    color: 'white',
                }
            },



        },

        plugins: {
            legend: {
                display: false
            }
        },

    };


    myChart = new Chart(ctx, {

        data: {
            // labels: dataZeros.xValues,
            labels: math.range(-2, 2, 0.001)._data.map(function(each_element) {
                return Number(each_element.toFixed(3)).toString();
            }),
            datasets: [{
                    type: 'line',
                    label: 'Filter #1',
                    data: dataPoles,
                    backgroundColor: 'rgba(0, 255, 25, 1)',
                    borderColor: 'rgba(0, 255, 25, 1)',
                    borderWidth: 2,
                    pointRadius: 10,
                    pointStyle: 'crossRot',
                    showLine: false, // no line shown

                },
                {
                    type: 'line',
                    label: 'Filter #1',
                    // data: [{ x: -1.2, y: 0 },{ x: -1.2, y: 1 }],
                    data: dataZeros,
                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 2,
                    pointRadius: 5,
                    pointStyle: 'circle',
                    showLine: false, // no line shown

                },
                // {
                //     type: 'polarArea',
                //     label: 'Bar Dataset',
                //     data: ['1']

                // }
            ]
        },
        options: options
    });

    // myChart.destroy();
}