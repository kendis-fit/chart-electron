class PlotOptions {
    constructor({ saveAfterLoadingPath, hideButtons, closeAfterLoading }) {
        this.saveAfterLoadingPath = saveAfterLoadingPath;
        this.closeAfterLoading = closeAfterLoading;
        this.hideButtons = hideButtons;
    }

    toJson() {
        return JSON.stringify({ 
            saveAfterLoadingPath: this.saveAfterLoadingPath, 
            hideButtons: this.hideButtons, 
            closeAfterLoading: this.closeAfterLoading
        });
    }
}

module.exports = PlotOptions;