 chartIt();

 async function chartIt() {
     const data = await getData();
     const ctx = document.getElementById('chart').getContext('2d');

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


     const myChart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: data.xs,
             datasets: [{
                 label: 'Filter #1',
                 data: data.ys,
                 backgroundColor: 'rgba(0, 255, 25, 1)',
                 borderColor: 'rgba(0, 255, 25, 1)',
                 borderWidth: 1,
                 barThickness: 4,
                 // pointStyle: 'circle',

             }]
         },
         options: options
     });

 }