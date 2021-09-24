let MyChart = document.getElementById('barChart').getContext('2d')

let deptWiseCountChart = new Chart(barChart, {

    type: 'bar',
    data: {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri","Sat", "Sun"],
        datasets: [{
            label: 'dailyRevenue',
            data: [20, 22, 32, 45, 47, 36, 50],
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            borderWidth: 1,
            borderColor: 'white',
            hoverBorderWidth: 3,
            hoverBorderColor: 'white'
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


})
