const a = [1, -1.58, 1.01, -0.23];
const b = [0.48, -1.43, 1.43, -0.48];
chartIt(a, b);
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
                }
            },

            y: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                }
            }
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
                backgroundColor: 'rgba(0, 255, 25, 1)',
                borderColor: 'rgba(0, 255, 25, 1)',
                borderWidth: 1,
                barThickness: 10,
                // pointStyle: 'circle',

            }]
        },
        options: options
    });

    // myChart.destroy();
}