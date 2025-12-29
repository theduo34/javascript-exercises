// Solution for Question1
const firstName = "Doe";
const lastName = "John";
const age = 25;

console.log("Question1 answer => " + "My name is " + firstName + " " + lastName + " and I am " + age + " years old.");

// Solution for Question2
const num1 = 15;
const num2 = 8;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log("Question2 answer => " + "Sum is " + sum + ", difference is " + difference + ", product is " + product + ", quotient is " + quotient + ".");

// Solution for Question3
const temperature = 22;

const questionNo = "Question3 answer => ";

if(temperature < 20) {
  console.log(questionNo + "It's cold." );
} else {
  console.log(questionNo + "It's warn.");
}

// Solution for Question4
const price = 50;
const discount = 10; //discount not in percentage

const finalPrice = price - discount ;

console.log("Question4 answer => " + "After discount final price is " + finalPrice);

// Solution for Question5
const number = -0;

const solutionNumber = "Question5 answer => ";

if(number > 0) {
  console.log(solutionNumber + number + " is a positive number");
} else if ( number < 0 ) {
  console.log(solutionNumber + number + " is negative number");
} else {
  console.log(solutionNumber + number + " is zero");
}