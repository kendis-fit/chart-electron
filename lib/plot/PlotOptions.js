class PlotOptions {
    constructor({ hideButtons }) {
        this.hideButtons = hideButtons;
        this.savePath = undefined;
    }

    toJson() {
        return JSON.stringify({ hideButtons: this.hideButtons, savePath: this.savePath });
    }
}

module.exports = PlotOptions;