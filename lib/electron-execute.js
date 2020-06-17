const fs = require("fs");
const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

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
        if (plotOpts.saveAfterLoadingPath) {
            ipcMain.on("save-chart", (_, base64) => {
                fs.writeFile(plotOpts.saveAfterLoadingPath, base64, "base64", err => {
                    if (err) throw new Error(err);
                });
            });
        }
        window.webContents.send("init-chart", plotData, plotOpts);
    });
});