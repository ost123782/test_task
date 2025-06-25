import renderChart from "./scripts/ui/renderChart.js";
import {chartBody, citiesSelector} from "./scripts/commonVariables.js";

citiesSelector.addEventListener('change', (e) => {
    chartBody.innerHTML = ''
    renderChart(e.target.value)
})

renderChart();