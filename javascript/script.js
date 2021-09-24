let MyChart = document.getElementById('MyChart').getContext('2d')

let deptWiseCountChart = new Chart(MyChart, {

    type: 'line',
    data: {
        labels: ['AI & DS', 'CMPN', 'INFT', 'INST', 'ETRX', 'EXTC'],
        datasets: [{
            label: 'deptWiseCount',
            data: [1, 14, 19, 11, 13, 29],
            backgroundColor: ['green', 'red', 'blue', 'yellow', 'lime', 'indigo'],
            borderWidth: 1,
            borderColor: 'grey',
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Department wise count for ChartJs workshop',
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
