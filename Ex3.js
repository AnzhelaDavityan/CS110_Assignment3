// 3.Given two numbers num1 and num2, using addition arithmetic operation only, write a program that calculates multiplication of given two numbers.
// Your program must use while loop.
let num1 = 4;
let num2 = 5;
let product = 0;

if (num1 == 0 || num2 == 0){
    result = 0;
    console.log (result);
}else{
    while (num2 > 0){
          product += num1;
          num2 --;
    }
}
console.log (product)

     