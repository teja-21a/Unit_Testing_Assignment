//MAIN GAME LOGIC

// eslint-disable-next-line no-console

import ILogger from "./ILogger";
import IRandomNumberGenerator from "./IRandomGen";

export default class Jackpot{

    //INITILIZING THE RANDOM NUMBERS LATER WE CAHANGE THEM IN SPIN UNCTION
    private number1:number=0;
    private number2:number=0;
    private number3:number=0;

    //INITILIZING RANDOM NUMBER GENERATING OBJECT AND LOGGER OBJECT FOR URTHER USE
    private Spinner:IRandomNumberGenerator;
    private logger:ILogger;

    //CONSTRUCTOR TAKING RANDOM_NUMBER_GENERATOR OBJECT AND LOGGER OBJECT
    constructor(Spinner:IRandomNumberGenerator,logger:ILogger){
        this.Spinner=Spinner;
        this.logger=logger;
        // this.number1=this.randomNumberGenerator.random();
        // this.number2=this.randomNumberGenerator.random();
        // this.number3=this.randomNumberGenerator.random();
    }

    //SPINNER GENERATES 3 NUMBERS AND CHECKS
    public spin(Spinner:IRandomNumberGenerator):boolean{

        //GENERATING THREE RANDOM NUMBERS FROM RANDOMGEN CLASS
        this.number1=this.Spinner.random();
        this.number2=this.Spinner.random();
        this.number3=this.Spinner.random();

        //CALLING FUNCTION THAT WRITES INTO LOG
        this.writeIntoLog(this.number1,this.number2,this.number3);

        //CONDITION CHECKER
        if(this.number1===this.number2 && this.number2===this.number3)
            return true;
        else
            return false;

    }

    //FUNCTION THAT WRITES INTO LOG
    private writeIntoLog(number1:number,number2:number,number3:number) {
        const log = `${number1}, ${number2}, ${number3}\n`;
        this.logger.log(log);
      }
    
} 