const Chart = require("chart.js");
const { ipcRenderer } = require("electron");

const { getColor } = require("./utils");

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
                borderColor: [...getColor(chartData.data.length)],
                fill:false,
                data
                }
            })
            :
            [
                {
                    label: "",
                    backgroundColor: [...getColor(chartData.data.length)],
                    data: chartData.data
                }
            ]
        },
    });
});