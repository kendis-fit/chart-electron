class PlotStruct {
    constructor(type, labels, data) {
        this.type = type;
        this.labels = labels;
        this.data = data;
    }

    toJson() {
        return JSON.stringify({ type: this.type, labels: this.labels, data: this.data });
    }
}

module.exports = PlotStruct;