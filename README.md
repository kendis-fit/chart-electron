# Chart Electron
A simple application that combinates two library electron and chart, also it launchs with help of node(without Electron).

## Examples
```shell
const { Plot } = require("chart-electron");

const labels = ["Apple", "Bananas", "Others"];
const dataset = [34, 54, 21];

const plot = new Plot();
plot.bar(labels, dataset);
plot.show(); // this method is required to show a chart

// also you can make a few plots per one time
const polar = new Plot();
polar.polar(labels, dataset);
polar.show();
```