"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index2_1 = __importDefault(require("./index2"));
console.log("Welcome to the calculator app\n");
var calci = new index2_1.default();
console.log("Addition of 10 and 12 is " + calci.addition(10, 12) + "\n");
console.log("Subtraction of 15 and 12 is " + calci.substraction(15, 12) + "\n");
console.log("Multiplication of 10 and 12 is " + calci.multiplication(10, 12) + "\n");
console.log("Division of 10 and 2 is " + calci.division(10, 12) + "\n");
console.log("Division of 10 and 0 is " + calci.division(10, 0) + "\n");
