# Intoduction
A simple application that combinates two library electron and chart, also it launchs with help of node. Typescript is included out of box.

## Installation
NPM
> npm i chart-electron

YARN
> yarn add chart-electron

## Chart support
* bar
* horizontal bar
* pie
* polar
* doughnut
* line
* radar
* bubble

## Examples
```js
const { Plot } = require('chart-electron');

// this example fits only for bar, horizontalBar, pie, polar, doughnut
const labels = ['Apple', 'Bananas', 'Others'];
const dataset = [34, 54, 21];

const plot = new Plot({ type: 'bar', labels, data: dataset });
plot.show(); // this method is required to show a chart

// this example fits only for line, radar
const labels2 = labels;
const dataset2 = [[12, 33, 99], [32, 41, 23], [22, 34.2, 12.3]];

const plot2 = new Plot({ type: 'line', labels: labels2, data: dataset2 });
plot2.show();

// this example fits only for bubble
const labels3 = labels;
const dataset3 = [[{ x: 20, y: 34, r: 15 }], [{ x: 56, y: 21, r: 56 }], [{ x: 43, y: 67, r: 36 }, { x: 11, y: 21, r: 78 }]];
const plotCnfg = {
    type: 'bubble',
    labels: labels3,
    data: dataset3
}

const plot3 = new Plot(plotCnfg);
plot3.show();

// also you can set options for a plot
const plot4 = new Plot(plotCnfg, {
    hideButtons: true
});
plot4.show();

// or you can save a plot
const plot5 = new Plot(plotCnfg);
plot5.save('test.png');
```

## Methods
```js
/* constructors */
constructor(plot: IPlot, options?: IPlotOptions);
/* fields */
plot: IPlotJson;
options: IPlotOptionsJson;
/* methods */
save(path: string): void;
show(): void;
```