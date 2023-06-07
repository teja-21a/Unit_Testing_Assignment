"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index2_1 = __importDefault(require("./index2"));
console.log("OUR WALLET IS INITILIZED WITH ZERO RUPEES\n");
var wallet = new index2_1.default(0);
//ADDING MONEY TO WALLET
console.log("Adding money to our wallet\n");
wallet.add(500);
//WITHDRAWING MONEY FROM WALLET
console.log("Withdrawing money from wallet\n");
wallet.withdraw(300);
//TO KNOW BALANCE IN THE WALLET
wallet.getBalance();
