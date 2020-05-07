const Chart = require("chart.js");

const { getColor, convertHexToRgbA } = require("./utils");

class ChartBuilder {

    constructor(ctx, labels, data) {
        this.ctx = ctx;
        this.labels = labels;
        this.data = data;
    }

    createBar(type) { // bar, horizontal bar
        return new Chart(this.ctx, {
            type,
            data: {
            labels: this.labels,
            datasets: [
                {
                    label: "",
                    backgroundColor: [...getColor(this.data.length)],
                    data: this.data
                }
            ]
            },
            options: {
                legend: { 
                    display: false
                }
            }
        });
    }

    createLine() {
        return new Chart(this.ctx, {
            type: "line",
            data: {
                labels: this.labels,
                datasets: this.data.map((data, index) => ({
                    borderColor: [...getColor(this.data.length)][index],
                    fill: false,
                    label: "",
                    data
                }))
            },
        });
    }
    
    createRadar() {
        return new Chart(this.ctx, {
            type: "radar",
            data: {
                labels: this.labels,
                datasets: this.data.map((data, index) => ({
                    borderColor: [...getColor(this.data.length)][index],
                    backgroundColor: convertHexToRgbA([...getColor(this.data.length)][index], 0.5),
                    label: "",
                    data
                }))
            }
        });        
    }

    createBubble() {
        return new Chart(this.ctx, {
            type: "bubble",
            data: {
                labels: this.labels,
                datasets: this.data.map((data, index) => ({
                    backgroundColor: [...getColor(this.data.length)][index],
                    label: "",
                    data
                }))
            }
        });     
    }

    createUsual(type) { // doughnut, polar, pie
        return new Chart(this.ctx, {
            type,
            data: {
              labels: this.labels,
              datasets: [
                {
                    label: "",
                    backgroundColor: [...getColor(this.data.length)],
                    data: this.data
                }
              ]
            }
        });        
    }
}

module.exports = ChartBuilder;