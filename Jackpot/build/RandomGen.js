"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator() {
    }
    RandomNumberGenerator.prototype.random = function () {
        return Math.floor(Math.random() * (9 - 0 + 1) + 0);
    };
    return RandomNumberGenerator;
}());
exports.default = RandomNumberGenerator;
