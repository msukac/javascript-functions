// 1. Define a function called sum that takes two numbers as arguments and returns their sum.

function sum (num1, num2) {
  return num1 + num2;
};
console.log(sum(2,2));

// 2. Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

function isEqual(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

// 3. Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

function discountPercentage(cost, discount) {
  if (discount > 0 && discount < 100) {
    return cost * (discount / 100);
  } else {
    return "You are dumb";
  }
}

// 4. Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.

console.log("Problem #4:");

function stringCapitalize(string) {
   var arrayCaps = [];
   var arrayOfString = string.split(" ");
   for (var i=0; i<arrayOfString.length; i++){
      arrayCaps.push(arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1));
   }
   return arrayCaps.join(" ");
 }
 console.log(stringCapitalize("this is my string."));

// 5. Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.

console.log("Problem #5:");
var userInteger;
var roundUp;
function evenNumbers (userInteger) {
 //round the number up so we can work with a whole #
 roundUp = Math.ceil(userInteger);
 //check to make sure the number is betweem 0-100
 if ((!Number.isInteger(roundUp)) || (roundUp < 0) || (roundUp > 100)){
   return "Invalid Number.";
 }else {
   for(var j=0; j<= roundUp; j++) {
   //output all the even integers from 0 to that numbers
     if(j%2===0) {
       return(j);
     }
   }
 }
}

//check my outputs
console.log(evenNumbers(6));
console.log(evenNumbers(201));
console.log(evenNumbers("1"));
console.log("             ");
//I am getting undefined and I am not sure why?!?!

// 6. Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

console.log("Problem #6:");
function isDivisible(argum1, argum2) {
 var isDivisibleAnswer = argum1 / argum2;
 if (isDivisibleAnswer%2===0) {
   return "true";
 } else {
   return "false";
 }
}

console.log(isDivisible(100, 50));
console.log(isDivisible(200, 50));
console.log(isDivisible(50, 100));
console.log(isDivisible(3, 2));

// 7. Bonus: Write a function called oddNumbers that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.

//check if arugment falls between 0-100
//write a functin for > 40
//write a function for < 40

function oddNumbers(num) {
 //check if argument is an interger
 if(!Number.isInterger(num)) {
   return false;
 }else if (num > 100 || num < 0 ) {
   return false;
 }
 return outputOdd(num);
}

//output off numbers 0-40
function outputOdd (num) {
 var result = [];
 if (num < 40) {
   for (var i =0; i < 40; i+=2) {
     if (i %2 !==0) {
       result.push(i);
     }
   }
 }else {
   maxLength =num;
 }
   for (var j =0; j < 40; j+=2) {
     if (j %2 !==0) {
       result.push(j);
     }
     return result;
 }
}
console.log(oddNumbers(2));

// Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.

function evenNumbers(numInteger)
  if (numInteger % 2 !== 0) {
    console.log("Enter an integer");
  }
  else (numInteger > 0 && < 100) {
    for (i = 0; i <= arbInteger; i+=2) {
      console.log(i);
  };
evenNumbers(80);


// Bonus:
// 1. Check if the argument is a number.
// 2. Check if the argument integer falls into 0 and 100.
// 3. Write function for > 40.
// 4. Write function for < 40.

function oddNumbers(num) {
// Check if argument is an integer
  if(!Number.isInteger(num)) {
    return false;
// Check if argument falls between 0 and 100
  }
  else if(num > 100 || num < 0) {
    return false;
  }
  return true;
}

// Output odd numbers 0 to 40
function outputOdd(num) {
  var result = [];
  for (var i = 0; i < 40; i+=2) {
    result.push(i);
  }
  return result;
}

// Output even numbers 0 to 40
function outputEven


  console.log(oddNumbers(2));
  console.log(oddNumbers(2.5));
  console.log(oddNumbers('1'));
  console.log(oddNumbers('sdfsjfk'));
}

// Ramp Numbers A ramp number is a number whose digits from left to right either // only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
// Input: A positive integer, n.
// Output: true if the input is a ramp number, false if it is not

// 1. Convert the number to a string.
// 2. Loop through the string.
// 3. Compare then numbers to see if previous is larger then next to fail.

function checkRamp(num) {
var numStr = num.toString();
  for (var i = 0; i < numStr.length; i++) {
    if (numStr[i] >= numStr[i - 1]) {
      return false;
      //break
    }
  }
  return true;
}
checkRamp(20);
