// import 'jest';
import Calculator from "./CalculatorCode"
console.log("Welcome to the calculator app testing");
describe('test', () => {
  
  test('addition', async () => {
    //ARRANGE
    const calci = new Calculator();
    //ACTION
    const result=calci.addition(2,3);
    //ASSERT
    expect(result).toEqual(2+3);
  });

  test('substraction', async () =>{
    //ARRANGE
    const calci = new Calculator();
    //ACTION
    const result=calci.substraction(3,2);
    //ASSERT
    expect(result).toEqual(3-2);    
  });

  test('multiplication', async () =>{
    //ARRANGE
    const calci = new Calculator();
    //ACTION
    const result=calci.multiplication(3,2);
    //ASSERT
    expect(result).toEqual(3*2);
  });

  test('division',async () =>{
    //ARRANGE
    const calci = new Calculator();
    //ACTION
    const result=calci.division(10,2);
    expect(result).toEqual(10/2);
  });

  test('zeroDivisionError', async() =>{
    //ARANGE
    const calci = new Calculator();
    //ACT & ASSERT
    expect(()=>calci.division(10,0)).toThrow("Zero division error");
  });
});
