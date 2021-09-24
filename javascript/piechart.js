// let MyChart = document.getElementById('pieChart').getContext('2d')

// let totalRevenue = new Chart(pieChart, {

//     type: 'pie',
//     data: {
//         labels: ['AI & DS', 'CMPN', 'INFT', 'INST', 'ETRX', 'EXTC'],
//         datasets: [{
//             label: 'totalRevenue',
//             data: [1, 14, 19, 11, 13, 29],
//             backgroundColor: ['indigo','indigo','indigo','indigo','indigo', 'indigo'],

//             borderWidth: 1,
//             borderColor: 'grey',
//             hoverBorderWidth: 3,
//             hoverBorderColor: 'black'
//         }]
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Total Revenue',
//                 color: 'white',
//                 font: {
//                     size: 20
//                 }
//             },
//             legend: {
//                 display: true,
//                 position: 'bottom'
//             }
//         }
//     }


// })

new Chart(document.getElementById("pieChart"), {
  type: 'pie',
  data: {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Order Overview",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [200, 350, 444, 356, 433, 222, 489]
    }]
  },
  options: {
            plugins: {
                title: {
                    display: true,
                    
                    color: 'white',
                    font: {
                        size: 20
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
});


