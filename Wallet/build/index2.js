"use strict";
// eslint-disable-next-line no-console
Object.defineProperty(exports, "__esModule", { value: true });
// WALLET 
var Wallet = /** @class */ (function () {
    //INITILIZING WALLET WITH ZERO WHILE OBJECT CREATION
    function Wallet(balance) {
        this.balance = balance;
    }
    // DEPOSIT FUNCTION
    Wallet.prototype.add = function (amount) {
        {
            this.balance = this.balance + amount;
            console.log("You had deposited " + amount + " rupees.   Available Balance: " + this.balance + "\n");
        }
    };
    // WITHDRAW FUNCTION
    Wallet.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("INSUFFICIENT BALANCE Your balance is " + this.balance + "\n");
            throw new Error("Insuicient Balance");
        }
        else {
            this.balance = this.balance - amount;
            console.log("You had withdrawn " + amount + " rupees and the available balance is " + this.balance + "\n");
        }
    };
    // ACCOUNT BALANCE
    Wallet.prototype.getBalance = function () {
        return this.balance;
    };
    return Wallet;
}());
exports.default = Wallet;
