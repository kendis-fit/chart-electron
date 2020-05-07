const path = require("path");
const { app, BrowserWindow } = require("electron");

app.allowRendererProcessReuse = true;

const createWindow = () => {
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        }
    });
    window.removeMenu();
    return window;
}

const createPlot = (window, type, labels, data, colors) => {
    window.loadFile(path.join(__dirname, "page", "index.html"));
    window.webContents.on("did-finish-load", function() {
        window.webContents.send("init-chart", { type, labels, data, colors });
    });
}

class Plot {

    constructor() {
        this.window = null;
    }

    bar(labels, data, colors) {
        app.on("ready", () => {
            if (!this.window) this.window = createWindow();
            createPlot(this.window, "bar", labels, data, colors);
        });
    }

    pie(labels, data, colors) {
        app.on("ready", () => {
            if (!this.window) this.window = createWindow();
            createPlot(this.window, "pie", labels, data, colors);
        });
    }

    doughnut(labels, data, colors) {
        app.on("ready", () => {
            if (!this.window) this.window = createWindow();
            createPlot(this.window, "doughnut", labels, data, colors);
        });
    }

    line(labels, data, colors) {
        app.on("ready", () => {
            if (!this.window) this.window = createWindow();
            createPlot(this.window, "line", labels, data, colors);
        });
    }
}

module.exports = Plot;