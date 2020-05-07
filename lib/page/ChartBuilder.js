const Chart = require("chart.js");

const { getColor } = require("./utils");

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
                    data
                }))
            },
        });
    }
    
    createRadar() {
        new Chart(this.ctx, {
            type: "radar",
            data: {
                labels: this.labels,
                datasets: this.data.map((data, index) => ({
                    borderColor: [...getColor(this.data.length)][index],
                    backgroundColor: [...getColor(this.data.length)][index],
                    fill: false,
                    label: "",
                    data
                }))
            }
        });        
    }

    createUsual(type) { // doughnut, polar
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