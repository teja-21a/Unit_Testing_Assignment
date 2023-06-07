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

//LOGGGER_MOCK
class LoggerMock implements ILogger{
  public called:number;
  constructor(){
    this.called=0;
  }
  public log(text: string): void {
    this.called+=1;  
  }
}

describe('test', () => {
  
  test('add', async () => {

    //ARRANGE

    const randomNumberStub = new randomNumberGeneratorStub();
    const loggerstub = new LoggerMock();
    const JackpotObject = new Jackpot(randomNumberStub,loggerstub);

    //ACT
    const result:boolean = JackpotObject.spin(randomNumberStub);

    //ASSERT
    expect(result).toBe(true); //CHECKS WIN OR NOR
    expect(loggerstub.called).toEqual(1); //FILE LOGGGER CHECKER

  });

});
