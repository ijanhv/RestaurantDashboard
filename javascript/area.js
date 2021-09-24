new Chart(document.getElementById("areaChart"), {
    type: 'area',
    data: {
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri","Sat", "Sun"],
      datasets: [{
        label: "dailyRevenue",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [1232,980,804,1523,908,1123,1890]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Daily Revenue'
      }
    }
});

