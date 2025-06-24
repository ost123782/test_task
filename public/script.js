
const citiesSelector = document.querySelector('#cities')

citiesSelector.addEventListener('change', (e) => {
    document.querySelector('#chart').innerHTML = ''

    renderChart(e.target.value)
})
async function fetchData(city) {
  const res = await fetch(`/api/ohlc/${city}`);
  const json = await res.json();

  return json.map(d => ({
    x: new Date(d.timestamp),
    y: [d.open, d.high, d.low, d.close]
  }));
}

async function renderChart(city='Berlin') {
  const seriesData = await fetchData(city);

  const options = {
    chart: {
      type: 'candlestick',
      height: 500
    },
    series: [{
      name: 'Температура',
      data: seriesData
    }],
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MM.dd'
      }
    }
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

renderChart();