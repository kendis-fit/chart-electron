const path = require("path");
const electron = require("electron");
const { spawn } = require("child_process");

const filePath = path.join(__dirname, "electron-execute.js");

class Plot {

    bar(labels, data, colors) {
        spawn(electron, [filePath, JSON.stringify({ type: "bar", labels, data, colors })]);
    }

    pie(labels, data, colors) {
        spawn(electron, [filePath, JSON.stringify({ type: "pie", labels, data, colors })])
    }

    doughnut(labels, data, colors) {
        spawn(electron, [filePath, JSON.stringify({ type: "doughnut", labels, data, colors })])
    }

    line(labels, data, colors) {
        spawn(electron, [filePath, JSON.stringify({ type: "line", labels, data, colors })])
    }
}

module.exports = Plot;