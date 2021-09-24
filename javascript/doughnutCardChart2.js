new Chart(document.getElementById("doughnutCardChart2"), {
    type: 'doughnut',
    data: {
    //   labels: ["Mon", "Tues", "Wed", "Thurs", "Fri","Sat", "Sun"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [200,350]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Order Overview'
      }
    }
});
