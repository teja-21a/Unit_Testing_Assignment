import IRandomGen from "./IRandomGen";
import Jackpot from "./GameLogic";
import ILogger from "./ILogger";

//RANDOM_NUMBER_GENERATOR_STUB
class randomNumberGeneratorStub implements IRandomGen{
  random(): number {
    //TO Pass the test By Passing Same Value
    return 2;
    //To Fail the Test Mostly by Passing Randomly.
    //return Math.floor(Math.random()*(9-0+1)+0);
  }
}

class randomNumberGeneratorStub2 implements IRandomGen{
  random(): number {
    //To Fail the Test Mostly by Passing Randomly.
    return Math.floor(Math.random()*(9-0+1)+0);
  }
}

//LOGGGER_MOCK
class LoggerMock implements ILogger{
  public called:number;
  constructor(){
    this.called=0;
  }
  public log(text: string): void {
    this.called=1;  
  }
}


describe('test', () => {
  
  test('add', async () => {

    //ARRANGE

  const randomNumberStub = new randomNumberGeneratorStub();
  const randomNumberStub2 = new randomNumberGeneratorStub2();
    const loggerstub = new LoggerMock();
    const JackpotObject = new Jackpot(randomNumberStub,loggerstub);
    const JackpotObject2 = new Jackpot(randomNumberStub2,loggerstub)

    //ACT
    const result:boolean = JackpotObject.spin(randomNumberStub);
    const result2:boolean = JackpotObject2.spin(randomNumberStub2);
    // loggerstub.log("");


    //ASSERT
    expect(result).toBe(true); //CHECKS WIN
    expect(result2).toBe(false); //CHECKS LOSE
    expect(loggerstub.called).toEqual(1); //FILE LOGGGER CHECKERs
    expect(randomNumberStub.random()).toEqual(2);
  });

});
