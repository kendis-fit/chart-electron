const Plot = require("./lib/Plot");

const labels = ["test", "test2", "fdsf"];
const data = [34, 54.3, 32.4];

const plot = new Plot();
// plot.bar(labels, data);
// plot.radar(labels, data);
plot.polar(labels, data);


// const test = new Plot();
// test.line(labels, [[...data], [10, 34]]);

// module.exports = { Plot };