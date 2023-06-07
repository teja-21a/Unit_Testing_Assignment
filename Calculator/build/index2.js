"use strict";
// eslint-disable-next-line no-console
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //ADDITION
    Calculator.prototype.addition = function (a, b) {
        console.log(a + "+" + b + "=" + (a + b));
        return (a + b);
    };
    //SUBSTRACTION
    Calculator.prototype.substraction = function (a, b) {
        console.log(a + "-" + b + "=" + (a - b));
        return (a - b);
    };
    //MULTIPLICATION
    Calculator.prototype.multiplication = function (a, b) {
        console.log(a + "/" + b + "=" + (a / b));
        return (a * b);
    };
    Calculator.prototype.division = function (a, b) {
        if (b === 0)
            throw new Error('Zero division error');
        return (a / b);
    };
    return Calculator;
}());
exports.default = Calculator;
