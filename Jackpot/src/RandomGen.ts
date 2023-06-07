//RANDOM NUMBER GENERATOR IMPLEMENTING INTERACE

import IRandomNumberGenerator from "./IRandomGen";

export default class RandomNumberGenerator implements IRandomNumberGenerator{

    public random():number{
        return Math.floor(Math.random()*(9-0+1)+0);
    }
}