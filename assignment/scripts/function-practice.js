console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
 console.log( hello());

// Call the function to test

console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name;
}

console.log(helloName('Mark Terry') );
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log(addNumbers(2,1) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
  let answer = num1*num2*num3;
  return answer;

}
console.log(multiplyThree(3,4,5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let sports = ['baseball', 'hockey', 'football']


function getLast( array ) {
  return array[sports.length - 1];
}
console.log(getLast(sports));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let cities = ['Minneapolis', 'Boston', 'NewYork', 'Los Angeles']
let num = [1, 2, 3, 4,];

function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value){
      return true;
    }
  }
  return false;
}

console.log('is Minneapolis a city?', find('Minneapolis', cities));
console.log('is Los Angeles a city?', find('Los Angeles', cities));
console.log('is 0 a number?', find(0, num));
console.log('is 3 a number?', find(3, num));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
////////////////////////
