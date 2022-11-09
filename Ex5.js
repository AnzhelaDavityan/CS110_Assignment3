// 5. Write a program that given a positive decimal number, will print its binary value.
//Hint: You can combine the remainders into a string and then reverse the string for the correct result.
let num= 5;
let result="";
while(num>0){
    rem= num%2;
    result += rem.toString();
    num= Math.floor(num/2);

}
let reversed="";
let n;
for (n=result.length-1; n>=0 ; n--){
    reversed += result[n];
}
console.log(reversed);


