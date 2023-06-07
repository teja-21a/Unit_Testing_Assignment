"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index2_1 = __importDefault(require("./index2"));
var Logger_1 = __importDefault(require("./Logger"));
var RandomGen_1 = __importDefault(require("./RandomGen"));
console.log("Welcome to the MONEY SPINNER If you win the loot is YOUR'S \n");
var spinner = new RandomGen_1.default();
var logger = new Logger_1.default();
var JackpotObject = new index2_1.default(spinner, logger);
// console.log(JackpotObject.spin(spinner));
if (JackpotObject.spin(spinner)) {
    console.log("Hurray yoy won the game");
}
else {
    console.log("Try Again\n");
}
