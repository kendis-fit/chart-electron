const Plot = require("./lib/Plot");

const labels = ["test", "test2"];
const data = [34, 54.3];

const plot = new Plot();
plot.bar(labels, data);
// plot.pie(labels, data);
// plot.doughnut(labels, data);


// const test = new Plot();
// test.line(labels, [[...data], [10, 34]]);

// module.exports = { Plot };