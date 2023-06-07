"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jackpot = /** @class */ (function () {
    function Jackpot(Spinner, logger) {
        this.number1 = 0;
        this.number2 = 0;
        this.number3 = 0;
        this.Spinner = Spinner;
        this.logger = logger;
        // this.number1=this.randomNumberGenerator.random();
        // this.number2=this.randomNumberGenerator.random();
        // this.number3=this.randomNumberGenerator.random();
    }
    Jackpot.prototype.spin = function (Spinner) {
        this.number1 = this.Spinner.random();
        this.number2 = this.Spinner.random();
        this.number3 = this.Spinner.random();
        this.writeIntoLog(this.number1, this.number2, this.number3);
        if (this.number1 === this.number2 && this.number2 === this.number3)
            return true;
        else
            return false;
    };
    Jackpot.prototype.writeIntoLog = function (number1, number2, number3) {
        var log = "".concat(number1, ", ").concat(number2, ", ").concat(number3, "\n");
        this.logger.log(log);
    };
    return Jackpot;
}());
exports.default = Jackpot;
