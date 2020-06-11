(function (root) {

    const Chart = require("chart.js");
    const { ipcRenderer } = require("electron");

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
            const ctx = chartInstance.chart.ctx;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    const ChartBuilder = require("./ChartBuilder");

    const chart = document.getElementById("chart");

    let chartObj = null;

    function downloadChart() {
        if (chart.obj !== null) {
            const a = document.createElement("a");
            a.href =  chart.toDataURL("image/png");
            a.download = `chart-${new Date().getTime()}.png`;
            a.click();
        }
    }

    ipcRenderer.on("init-chart", (_, chartData) => {

        
        if (chartData.labels.length !== chartData.data.length) {
            throw new Error("the amount of labels must be equal the amount of data");
        }

        const ctx = chart.getContext("2d");

        if (chartObj instanceof Chart) chartObj.destroy();

        switch (chartData.type) {
            case "bar":
            case "horizontalBar":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data).createBar(chartData.type);
                break;
            case "line":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data).createLine();
                break;
            case "radar":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data).createRadar();
                break;
            case "doughnut":
            case "polarArea":
            case "pie":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data).createUsual(chartData.type);
                break;
            case "bubble":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data).createBubble();
                break;
        }
    });
    root.downloadChart = downloadChart;
})(this);