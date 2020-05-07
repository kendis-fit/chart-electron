const Plot = require("./lib/Plot");

const labels = ["test", "test2", "fdsf"];
const data = [34, 54.3, 32.4];

const plot = new Plot();
// plot.bar(labels, data);
// plot.radar(labels, data);
// plot.pie(labels, data);
// plot.show();

console.log("fdfs");

const test = new Plot();
test.bubble(labels, [[{ x: 10, y: 34, r: 15}, { x: 43, y: 12, r: 65 }, { x: 43, y: 12, r: 65 }]]);
test.show();

// module.exports = { Plot };