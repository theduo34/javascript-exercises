// Solution for Question11
const answerNo11 = "Question11 answer =>"

const marks = 85;
if(marks >= 90 && marks <= 100) {
  console.log(`${answerNo11} Grade A.`)
} else if (marks >= 80 && marks <= 89) {
  console.log(`${answerNo11} Grade B.`)
} else if (marks >= 70 && marks <= 79) {
  console.log(`${answerNo11} Grade C.`)
} else if (marks >= 60 && marks <= 69) {
  console.log(`${answerNo11} Grade D.`)
} else if(marks < 60) {
  console.log(`${answerNo11} Grade F.`)
} else {
  console.log(`${answerNo11} Invalid value.`)
}

// Solution for Question12
const length = 5;
const width = 10;

const area = length * width;
const perimeter = 2 * (length + width);

console.log(`Question12 answer => Area: ${area}, and Perimeter: ${perimeter}`);

// Solution for Question13
const year = 2023;
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) ||
  (year % 400 === 0)

console.log(`Question13 answer => ${isLeapYear ? `${year} is a leap year.` : `${year} is not a leap year.`}`)

// Solution for Question14
const number = 47;

const divisibleBy3 = number % 3 === 0;
const divisibleBy5 = number % 5 === 0;

console.log(`Question14 answer => ${
  divisibleBy3 && divisibleBy5
    ? `${number} is divisible by 3 and 5.`
    : divisibleBy3
      ? `${number} is divisible by 3.`
      : `${number} is divisible by 5. `
}`);

// Solution for Question15
const answerNo15 = "Question15 answer => "

const subject1 = 78;
const subject2 = 85;
const subject3 = 92;

const average = (subject1 + subject2 + subject3) / 3;

if(average >= 90) {
  console.log(`${answerNo15} Excellent.`)
} else if(average >= 75 && average < 90) {
  console.log(`${answerNo15} Good.`)
} else if(average >= 60 && average < 75) {
  console.log(`${answerNo15} Average.`)
} else {
  console.log(`${answerNo15} Needs improvement.`)
}