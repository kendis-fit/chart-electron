(function (root) {

    const fs = require("fs");
    const path = require("path");
    const Chart = require("chart.js");
    const { ipcRenderer, remote } = require("electron");

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
            const ctx = chartInstance.chart.ctx;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    const ChartBuilder = require("./ChartBuilder");

    const window = remote.getCurrentWindow();
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

    function renderChart(chartData, save) {
        if (chartData.labels.length !== chartData.data.length) {
            throw new Error("the amount of labels must be equal the amount of data");
        }

        const ctx = chart.getContext("2d");

        if (chartObj instanceof Chart) chartObj.destroy();

        switch (chartData.type) {
            case "bar":
            case "horizontalBar":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data, save).createBar(chartData.type);
                break;
            case "line":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data, save).createLine();
                break;
            case "radar":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data, save).createRadar();
                break;
            case "doughnut":
            case "polarArea":
            case "pie":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data, save).createUsual(chartData.type);
                break;
            case "bubble":
                chartObj = new ChartBuilder(ctx, chartData.labels, chartData.data, save).createBubble();
                break;
        }
    }

    function setChart(chartOpts) {
        if (chartOpts.hideButtons) {
            const buttons = document.getElementById("button-groups");
            buttons.style.display = "none";
        }
    }

    ipcRenderer.on("init-chart", (_, chartData, chartOpts) => {
        setChart(chartOpts);
        renderChart(chartData, function() {
            if (chartOpts.savePath) {
                window.minimize();
                this.options.animation = null;
                
                let base64 = chartObj.toBase64Image();
                base64 = base64.split(",")[1];
                
                fs.mkdirSync(path.dirname(chartOpts.savePath), { recursive: true });
                fs.writeFileSync(chartOpts.savePath, base64, "base64");
                
                window.close();
            }
        });
    });
    root.downloadChart = downloadChart;
})(this);