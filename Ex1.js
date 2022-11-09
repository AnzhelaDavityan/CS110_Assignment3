// 1. Using while write a program that prints the following figure for given number of lines.

const num =3 ;
let row=1;
let pattern = "";// pattern variable carries the final pattern in string format

// outer loop runs for `rows` no. of times
while (row <= num) {
        let column=1;

        while(column<= num){
        pattern += "+";
        column++;
        }
   row++;
   pattern += "\n";
}
console.log(pattern);
