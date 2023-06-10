import IRandomGen from "./IRandomGen";
import Jackpot from "./GameLogic";
import ILogger from "./ILogger";
import {Mock, It, Times} from "moq.ts" 



describe('test', () => {
  
  test('add', async () => {

    //ARRANGE
    const stubGen = new Mock<IRandomGen>()
      .setup((RandomGen) => RandomGen.random())
      .returns(5)
      .object();

      // const stubGen2 = new Mock<IRandomGen>()
      // .setup((RandomGenn) => RandomGenn.random())
      // .returns(Math.floor(Math.random()*(9-0+1)+0))
      // .object();

      const loggerMock = new Mock<ILogger>()
      .setup((Logger) => Logger.log(It.IsAny()))
      .returns();
 
    const JackpotObject = new Jackpot(stubGen,loggerMock.object());
    //const JackpotObject2 = new Jackpot(stubGen2,loggerMock.object());

    //ACT
    const result:boolean = JackpotObject.spin(stubGen);
    //const result2:boolean = JackpotObject2.spin(stubGen2)



    //ASSERT
    expect(result).toBe(true); //CHECKS WIN
    //expect(result2).toBe(false);
    loggerMock.verify((Logger) => Logger.log(It.IsAny()), Times.AtMostOnce());
  });

});
