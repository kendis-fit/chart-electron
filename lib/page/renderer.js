const Chart = require("chart.js");
const { ipcRenderer } = require("electron");

const { getRandomColor } = require("./utils");

const chart = document.getElementById("chart");

let chartObj = null;

ipcRenderer.on("init-chart", (_, chartData) => {
    
    let isMultiply = Array.isArray(chartData.data[0]);
    const ctx = chart.getContext("2d");

    if (chartObj) chartObj.destroy();

    chartObj = new Chart(ctx, {
        type: chartData.type,
        data: {
            labels: chartData.labels,
            datasets: isMultiply ? chartData.data.map((data, index) => {
                console.log(data);
                return {
                // backgroundColor: chartData.colors && chartData.colors.length < index ? chartData.colors[index] : getRandomColor(),
                borderColor: chartData.colors && chartData.colors.length < index ? chartData.colors[index] : getRandomColor(),
                fill:false,
                data
                }
            })
            :
            [
                {
                    label: "",
                    backgroundColor: chartData.colors || chartData.data.map(() => getRandomColor()),
                    data: chartData.data
                }
            ]
        },
    });
});