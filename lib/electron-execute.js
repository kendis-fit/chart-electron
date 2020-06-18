const path = require("path");
const { app, BrowserWindow } = require("electron");

app.allowRendererProcessReuse = true;

app.on("ready", () => {
    
    const plotData = JSON.parse(process.argv[2]);
    const plotOpts = JSON.parse(process.argv[3]);

    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        }
    });
    window.removeMenu();
    window.loadFile(path.join(__dirname, "page", "index.html"));
    window.webContents.on("did-finish-load", () => {
        window.webContents.send("init-chart", plotData, plotOpts);
    });
});