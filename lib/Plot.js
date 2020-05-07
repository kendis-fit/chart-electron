const path = require("path");
const electron = require("electron");
const { spawn } = require("child_process");

const filePath = path.join(__dirname, "electron-execute.js");

class Plot {

    bar(labels, data, ) {
        spawn(electron, [filePath, JSON.stringify({ type: "bar", labels, data,  })]);
    }

    pie(labels, data, ) {
        spawn(electron, [filePath, JSON.stringify({ type: "pie", labels, data,  })])
    }

    radar(labels, data, ) {
        spawn(electron, [filePath, JSON.stringify({ type: "radar", labels, data,  })])
    }

    doughnut(labels, data, ) {
        spawn(electron, [filePath, JSON.stringify({ type: "doughnut", labels, data,  })])
    }

    line(labels, data, ) {
        spawn(electron, [filePath, JSON.stringify({ type: "line", labels, data,  })])
    }

    polar(labels, data) {
        spawn(electron, [filePath, JSON.stringify({ type: "polarArea", labels, data,  })])
    }
}

module.exports = Plot;