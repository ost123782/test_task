import getData from "../services/getData.js";
import {chartBody} from "../commonVariables.js";

export default async function renderChart(city='Berlin') {
    try {
        const seriesData = await getData(city);

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
                    format: 'hh:mm'
                }
            }
        };

        const chart = new ApexCharts(chartBody, options);
        chart.render();
    } catch (err) {
        chartBody.innerHTML = err.message;
    }
}