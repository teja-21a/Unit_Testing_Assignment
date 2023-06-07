import Wallet from "./MoneyWallet"
describe('test', () => {
  
  //DEPOSITING TESTING FUNCTION
  test('positiveDeposit', async () => {
    //Arrange
    const wallet = new Wallet(0);
    //Action
    var previousBalance = wallet.getBalance();
    wallet.add(300);
    //Assertion
    expect(wallet.getBalance()).toEqual(previousBalance+300);
  });

  //WITHDRAWL TESTING FUNCTION
  test('withdrawl', async () =>{
    //Arrange
    const wallet = new Wallet(1000);
    //Action
    var previousBalance = wallet.getBalance();
    wallet.withdraw(500);
    //Assertion
    expect(wallet.getBalance()).toEqual(previousBalance-500);
  });

  //INSUFFICIENT BALANCE TESTING FUNCTION
  test('insufficientBalance', async () =>{
    //Arrange
    const wallet = new Wallet(0);
    //Action
    var previousBalance = wallet.getBalance();
    //Assertion
    expect(()=>wallet.withdraw(500)).toThrow("Insuicient Balance");
  });

});
