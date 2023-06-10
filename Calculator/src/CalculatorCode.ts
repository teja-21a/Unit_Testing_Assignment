// eslint-disable-next-line no-console

export default class Calculator{
    
    public addition(a:number,b:number):number{
        console.log(a+"+"+b+"="+(a+b));
        return (a+b);
    }
    
    public substraction(a:number,b:number):number{
        console.log(a+"-"+b+"="+(a-b));
        return (a-b);
    }

    public multiplication(a:number,b:number):number{
        console.log(a+"/"+b+"="+(a/b));
        return (a*b); 
    }

    public division(a:number,b:number){
        if(b===0)
            throw new Error('Zero division error')
        return (a/b);
    }
}
