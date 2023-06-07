import Calculator from "./CalculatorCode";

console.log("Welcome to the calculator app\n");

const calci = new Calculator();

//ADD
console.log("Addition of 10 and 12 is "+calci.addition(10,12)+"\n");

//SUB
console.log("Subtraction of 15 and 12 is "+calci.substraction(15,12)+"\n");

//MULTIPLICATION
console.log("Multiplication of 10 and 12 is "+calci.multiplication(10,12)+"\n");

//DIVISION
console.log("Division of 10 and 2 is "+calci.division(10,12)+"\n");

//BELOW LINE THROWS ZERO DIVISION ERROR
// console.log("Division of 10 and 0 is "+calci.division(10,0)+"\n");