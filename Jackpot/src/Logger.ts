//LOGGER IMPLEMENTING ILOGGER INTERACE

import ILogger  from "./ILogger";
import fs from 'fs';

export default class Logger implements ILogger{
    
    public log(text:string):void{

        //APPENDING INCASE WE HAVING TEXT FILE
        try{
        fs.appendFileSync('output.txt',text);
        }

        // THROW ERROR IF TEXT FILE IS ABSENT 
        catch{
            console.error('error logging into file');
        }

    }
}