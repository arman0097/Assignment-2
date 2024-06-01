// Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
/*    */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77


// Write a function to check if a number is even. The function should take a single argument, which is the number to check.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false
  

// Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30


// Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
function findSmallestNum(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
}
console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5


// 5.Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str) {
    const vowels = new Set('aeiouAEIOU');
    let vowelCount = 0;
    for (const char of str) {
      if (vowels.has(char)) {
        vowelCount++;
      }
    }
    return vowelCount;
}
console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3


// Write a function to get the first element of an array. The function should take a single argument, which is the array.
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
  

// Write a function to return the factorial of a number. The function should take a single argument, which is the number.
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    else {
      return num * factorialize(num - 1);
    }
}
console.log(factorialize(5)); // Output: 120
console.log(factorialize(7)); // Output: 5040


// Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str) {
    const characters = str.split("");
    characters.reverse();
    return characters.join("");
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"



// Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
function toLowerCase(str) {
    return str.toLowerCase();
} 
console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"



// Write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(str) {
    return str.length;
}
console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5



//  Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 
console.log(mergeArrays(["a", "b"], ["c", "d"])); // 



//  Write a function to get the last element of an array. The function should take a single argument, which is the array.
function getLastElement(arr) {
    if (arr.length === 0) {
      return undefined;
    } else {
      return arr[arr.length - 1];
    }
} 
console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"



// Write a function to get the first character of a string. The function should take a single argument, which is the string.
function getFirstCharacter(str) {
    if (str.length === 0) {
      return undefined;
    } else {
      return str[0];
    }
}
console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"




//  Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      if (typeof num === 'number' && isFinite(num)) {
        sum += num;
      }
    }
  
    // Return the sum
    return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  