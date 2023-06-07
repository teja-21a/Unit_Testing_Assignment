import ILogger from "./ILogger";
import Jackpot from "./GameLogic";
import IRandomNumberGenerator from "./IRandomGen";
import Logger from "./Logger";
import  RandomNumberGenerator  from "./RandomGen";

console.log("Welcome to the MONEY SPINNER If you win the loot is YOUR'S \n")

//INITILISING OBJECTS
const spinner = new RandomNumberGenerator();
const logger = new Logger();
const JackpotObject = new Jackpot(spinner,logger);

// console.log(JackpotObject.spin(spinner));

//CONDITION CHECKER
if(JackpotObject.spin(spinner)){
    //WIN
    console.log("Hurray yoy won the game");
}
else{
    //LOST
    console.log("Try Again\n");
}