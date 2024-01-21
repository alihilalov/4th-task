const numbers = [10, 20, 30, 40, 50];
const [firstNumber, secondNumber] = numbers;
console.log(firstNumber, secondNumber);
console.log(numbers.length);

const myString = "This is string variable";
const myNumber = 234123;
const myBoolean = true;

console.log(typeof myString, typeof myNumber, typeof myBoolean);
console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);
console.log(firstNumber != secondNumber);
console.log(firstNumber !== secondNumber);
console.log(firstNumber < secondNumber);
console.log(firstNumber > secondNumber);
console.log(firstNumber <= secondNumber);
console.log(firstNumber >= secondNumber);
console.log(firstNumber / 2 == 0 || firstNumber > 0);
console.log(firstNumber / 2 == 0 && firstNumber > 0);

console.log(!(firstNumber < 0));
