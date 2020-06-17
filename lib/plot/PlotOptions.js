class PlotOptions {
    constructor({ saveAfterLoadingPath, hideButtons }) {
        this.saveAfterLoadingPath = saveAfterLoadingPath;
        this.hideButtons = hideButtons;
    }

    toJson() {
        return JSON.stringify({ saveAfterLoadingPath: this.saveAfterLoadingPath, hideButtons: this.hideButtons });
    }
}

module.exports = PlotOptions;