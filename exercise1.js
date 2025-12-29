// Solution for Question1
const firstName = "Doe";
const lastName = "John";
const age = 25;

console.log(`Question1 answer => My name is ${firstName} ${lastName}. I am ${age} years old.`);

// Solution for Question2
const num1 = 15;
const num2 = 8;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = Math.floor(num1 / num2);

console.log(`Question2 answer => Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`);

// Solution for Question3
const temperature = 22;

console.log(`Question3 answer => ${
  temperature < 20 
    ? "It's cold" 
    : "It's warm"
}`)

// Solution for Question4
const price = 50;
const discount = 10; //discount not in percentage

const finalPrice = price - discount;

console.log(`Question4 answer => After discount final price is ${finalPrice}`);

// Solution for Question5
const anyNumber = 0;

console.log(`Question5 answer => ${
  anyNumber > 0
    ? `${anyNumber} is a positive number`
    : anyNumber < 0
      ? `${anyNumber} is a negative number`
      : `${anyNumber} is zero `
}`);