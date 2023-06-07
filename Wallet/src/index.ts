import Wallet from "./MoneyWallet";

console.log("OUR WALLET IS INITILIZED WITH ZERO RUPEES\n");

const wallet = new Wallet(0);

//ADDING MONEY TO WALLET
console.log("Adding money to our wallet\n");
wallet.add(500);

//WITHDRAWING MONEY FROM WALLET
console.log("Withdrawing money from wallet\n");
wallet.withdraw(300);

//TO KNOW BALANCE IN THE WALLET
wallet.getBalance();