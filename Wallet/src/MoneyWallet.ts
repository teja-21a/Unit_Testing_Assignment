// eslint-disable-next-line no-console

// WALLET 
export default class Wallet{

    private balance:number;

    //INITILIZING WALLET WITH ZERO WHILE OBJECT CREATION
    constructor (balance:number){
        this.balance=balance;
    }
    // DEPOSIT FUNCTION
    add(amount:number):void{
        {
            this.balance=this.balance+amount;
            console.log("You had deposited "+amount+" rupees.   Available Balance: "+this.balance+"\n");
        }
    }
    // WITHDRAW FUNCTION
    withdraw(amount:number){
        if(amount>this.balance){
            console.log("INSUFFICIENT BALANCE Your balance is "+this.balance+"\n");
            throw new Error("Insuicient Balance");}
        else{
            this.balance=this.balance-amount;
            console.log("You had withdrawn "+amount+" rupees and the available balance is "+this.balance+"\n");
        }
    }
    // ACCOUNT BALANCE
    getBalance():number{
        return this.balance;
    }

}