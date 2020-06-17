const path = require("path");
const electron = require("electron");
const { spawn } = require("child_process");

const PlotStruct = require("./plot/PlotStruct");
const PlotOptions = require("./plot/PlotOptions");

const filePath = path.join(__dirname, "electron-execute.js");

class Plot {

    constructor(plot, options) {
        this.plot = new PlotStruct(plot.type, plot.labels, plot.data);
        this.options = new PlotOptions(options || {});
    }

    show() {
        spawn(electron, [filePath, this.plot.toJson(), this.options.toJson()]);
    }
}

module.exports = Plot;