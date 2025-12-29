// Solution for Question16
const character = "A";

let result ;

if(character >= "A" && character <= "Z"){
  result = "Character is uppercase letter";
} else if(character >= "a" && character <= "z"){
  result = "Character is lowercase";
} else {
  result = "Neither uppercase letter nor lowercase";
}

console.log(`Question16 answer => ${result}`)


// Solution for Question17
const age = 27;
const hasLicense = true;

console.log(`Question17 answer => ${
  age && hasLicense ? "Can drive" : "Can not drive"
}`);

// Solution for Question18
const totalAmount = 1000;
const isMember = true;

const  discount = isMember ? 20/100 : 5/100;
const finalTotalAmount = totalAmount - (discount * totalAmount);

console.log(`Question18 answer => After discount total is ${finalTotalAmount}`)


// Solution for Question19
const number = 15;

let divisibleBy3 = [];

for(let i = 1; i <= number; i++) {
  if(i % 3 === 0){
    divisibleBy3.push(i);
  }
}

console.log(`Question19 answer => [${divisibleBy3}]`);

// Solution for Question20
const hour = 14;

console.log(`Question20 answer => ${
  hour >= 5 && hour <= 11 
    ? "Good morning"
    : hour >= 12 && hour <= 17 
      ? "Good afternoon" 
    : hour >= 18 && hour <= 21 
        ? "Good evening" 
      : hour >= 4 && hour <= 22 
          ? "Good night" 
          : "Invalid input"
}`);
