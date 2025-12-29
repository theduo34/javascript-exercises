// Solution for Question6
const score = 75;
const hasPassed = score >= 50;

console.log(`Question6 answer => ${hasPassed ? "Pass" : "Fail"}`);

// Solution for Question7
const a = 12;
const b = 15;

console.log(`Question7 answer => ${
  a > b
    ? `${a} is greater than ${b}`
    : a < b
      ? `${a} is less than ${b}`
      : `${a} is equal to ${b} `
}`);

// Solution for Question8
const age = 16
const isEligible = age >= 18

console.log(`Question8 answer => ${
  isEligible ? "Can vote." : "Cannot vote."
}`);

// Solution for Question9
const isWeekend = true;

console.log(`Question9 answer => ${
  isWeekend ? "No work today!" : "Time to work!"
}`);

// Solution for Question10
const num = 24
const isEven = num % 2 === 0

console.log(`Question10 answer => ${
  isEven ? `${num} is even number.` : `${num} is old number.`}`
);