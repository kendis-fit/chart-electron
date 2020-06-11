const fs = require("fs");
const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

app.allowRendererProcessReuse = true;

app.on("ready", () => {
    
    const opts = JSON.parse(process.argv[2]);

    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        }
    });
    window.removeMenu();
    window.loadFile(path.join(__dirname, "page", "index.html"));
    window.webContents.on("did-finish-load", function() {
        window.webContents.send("init-chart", { ...opts });
    });
});