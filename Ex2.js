// 2. Write a code that for a given grade from 0 to 100 will print:
//1. The letter grade of the user (Using if/else).
//2. Using the calculated grade letter, check if the grade is passing or failing (Using switch).

  const n =75;
  let letter = "";
  if (n >= 97) {
    letter = "A+"; 
  } else if (n >= 93) {
    letter = "A";
  } else if (n >= 90) {
    letter = "A-";
  } else if (n >= 87) {
    letter = "B+";
  } else if (n >= 83) {
    letter = "B";
  } else if (n >= 80) {
    letter = "B-";
  } else if (n >= 87) {
    letter = "B+";
  } else if (n >= 77) {
    letter = "C+";
  } else if (n >= 73) {
    letter = "C";
  } else if (n >= 70) {
    letter = "C-";
  } else if (n >= 67) {
    letter = "D+";
  } else if (n >= 63) {
    letter = "D";
  } else if (n > 60) {
    letter = "D-";
  } else if (n <= 60) {
    letter = "F";
  } else {
    alert("Input your grade first");
  }
  resultOne=("Your grade is " + n+ " which corresponds to " + letter +".");

   
   switch (letter){
       case 'A+':
          console.log( resultOne+ 'You passed!');
          break;
      case 'A':
           console.log(resultOne+ 'You passed!');
           break;
      case 'A-':
          console.log( resultOne+ 'You passed!');
          break;
      case 'B+':
           console.log(resultOne+ 'You passed!');
           break;
      case 'B':
          console.log( resultOne+ 'You passed!');
          break;
      case 'B-':
           console.log(resultOne+ 'You passed!');
           break;
      case 'C+':
          console.log( resultOne+ 'You passed!');
          break;
      case 'C':
           console.log(resultOne+ 'You passed!');
           break;
      case 'C-':
          console.log( resultOne+ 'You passed!');
          break;
      default:
          console.log(resultOne+'You failed!')
   }







    

            