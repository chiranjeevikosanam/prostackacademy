//ascending order
let values = [20,0,40];

values.sort(function (a, b) { return (a - b); });
console.log(values);

//decending order

values.sort(function (a, b) { return (b - a); });
console.log(values);