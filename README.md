# Intoduction
A simple application that combinates two library electron and chart, also it launchs with help of node(without Electron).

## Installation
```shell
npm i chart-electron
```

## Examples
```js
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

## Methods
```shell
// charts
bar(labels: string[], data: number[]): void; 
horizontalBar(labels: string[], data: number[]): void;
pie(labels: string[], data: number[]): void;
polar(labels: string[], data: number[]): void;
doughnut(labels: string[], data: number[]): void;
line(labels: string[], data: number[][]): void;
radar(labels: string[], data: number[][]): void;
groupedBar(labels: string[], data: number[]): void;
bubble(labels: string[], data: IPoint[][]): void;

// others
show(): void;
```
