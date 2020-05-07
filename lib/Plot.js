const path = require("path");
const electron = require("electron");
const { spawn } = require("child_process");

const filePath = path.join(__dirname, "electron-execute.js");

class Plot {

    bar(labels, data) {
        this.type = "bar";
        this.labels = labels;
        this.data = data;
    }

    horizontalBar(labels, data) {
        this.type = "horizontalBar";
        this.labels = labels;
        this.data = data;
    }

    pie(labels, data) {
        this.type = "pie";
        this.labels = labels;
        this.data = data;
    }

    radar(labels, data) {
        this.type = "radar";
        this.labels = labels;
        this.data = data;
    }

    doughnut(labels, data) {
        this.type = "doughnut";
        this.labels = labels;
        this.data = data;
    }

    line(labels, data) {
        this.type = "line";
        this.labels = labels;
        this.data = data;
    }

    polar(labels, data) {
        this.type = "polarArea";
        this.labels = labels;
        this.data = data;
    }

    bubble(labels, data) {
        this.type = "bubble";
        this.labels = labels;
        this.data = data;
    }

    show() {
        spawn(electron, [filePath, JSON.stringify({ type: this.type, labels: this.labels, data: this.data })]);
    }
}

module.exports = Plot;