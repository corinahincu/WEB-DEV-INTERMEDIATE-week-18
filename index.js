// me: developer
var f = function (argument) {
    var result = argument + 0.5;
    return result;
};
// testing 
// someone : tester
var testValues = [
    { in: 1, out: 1.5 },
    { in: -1, out: -0.5 },
    { in: '1', out: NaN },
];
for (var i = 0; i < testValues.length; i++) { // HW1: use .forEach()
    var result = f(testValues[i].in);
    console.log("test:".concat(i + 1, ": ").concat(testValues[i].in, " -> ").concat(result, ",  ") + (result === testValues[i].out ? 'passed' : 'failed'));
}
