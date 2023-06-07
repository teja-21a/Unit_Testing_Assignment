// eslint-disable-next-line no-console

export default class Calculator{
    
    //ADDITION
    public addition(a:number,b:number):number{
        console.log(a+"+"+b+"="+(a+b));
        return (a+b);
    }
    
    //SUBSTRACTION
    public substraction(a:number,b:number):number{
        console.log(a+"-"+b+"="+(a-b));
        return (a-b);
    }

    //MULTIPLICATION
    public multiplication(a:number,b:number):number{
        console.log(a+"/"+b+"="+(a/b));
        return (a*b); 
    }

    //DIVISION
    public division(a:number,b:number){
        if(b===0)
            throw new Error('Zero division error')
        return (a/b);
    }
}
