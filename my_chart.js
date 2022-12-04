const ctx = document.getElementById('myChart')
  const ctx1 = document.getElementById('myChart1')

  /*new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','va chier','Luco'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,15,5],
        borderWidth: 1,
        borderColor: 'green'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });*/
  
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

    const labels = Samples.utils.months({count: 7});
    
    const data = {
    labels: labels,
    datasets: [
    {
      label: 'stream',
      data: Samples.utils.numbers(NUMBER_CFG),
      borderColor:'red',
      backgroundColor: Samples.utils.transparentize(255, 99, 132, 0.5),
    },
    {
      label: 'Ventes',
      data: Samples.utils.numbers(NUMBER_CFG),
      borderColor: 'blue',
      backgroundColor: Samples.utils.transparentize(0, 0, 255, 0.599),
    }
  ]
    };
    new  Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Kamado'
        }
        }
    },
    }
    )
    new Chart(ctx1,{
      type: 'doughnut',
      data:  {
  labels: [
    'Manga',
    'Anime',
    'stream'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [350, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]}
    })