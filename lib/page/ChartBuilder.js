const Chart = require("chart.js");

const { getColor, convertHexToRgbA } = require("./utils");

class ChartBuilder {

    constructor(ctx, labels, data, onComplete) {
        this.ctx = ctx;
        this.labels = labels;
        this.data = data;
        this.onComplete = onComplete;
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
                },
                animation: {
                    onComplete: this.onComplete
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
            options: {
                animation: {
                    onComplete: this.onComplete
                }
            }
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
            },
            options: {
                animation: {
                    onComplete: this.onComplete
                }
            }
        });        
    }

    createBubble() {
        return new Chart(this.ctx, {
            type: "bubble",
            data: {
                datasets: this.data.map((data, index) => ({
                    backgroundColor: [...getColor(this.data.length)][index],
                    label: [this.labels[index]],
                    data
                }))
            },
            options: {
                animation: {
                    onComplete: this.onComplete
                }
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
            },
            options: {
                animation: {
                    onComplete: this.onComplete
                }
            }
        });        
    }
}

module.exports = ChartBuilder;