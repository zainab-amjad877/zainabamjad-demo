// left rotate
let arr = [1, 2, 3, 4, 5];
let d = 2;
function rotateLeft(d, arr) {
    const n = arr.length;
    const rotatedArray = new Array(n);

    for (let i = 0; i < n; i++) {
        const Index = (i + (n - d)) % n;
        rotatedArray[Index] = arr[i];
    }

    return rotatedArray;
}
console.log("Original:", arr);
console.log("Rotate-Left:", rotateLeft(d, arr));

// right rotate
let arr1 = [1, 2, 3, 4, 5];
let d1 = 2;
function rotateRight(d1, arr1) {
    const n = arr.length;
    const rotatedArray = new Array(n);

    for (let i = n; i > -1; i--) {
        const Index = (i + (n + d1)) % n;
        rotatedArray[Index] = arr1[i];
    }

    return rotatedArray;
}
console.log("Original:", arr1);
console.log("Rotate-Right:", rotateRight(d1, arr1));

// find maximum number
let a1 = [1, 2, 3, 4, 5, 6];
function maximumNumber(a1) {
    let n = a1.length;
    let max = a1[0];
    for (i = 0; i < n; i++) {
        if (a1[i] > max) {
            max = a1[i];
        }
    }
    return max;
}
console.log("original:", a1);
console.log("max:", maximumNumber(a1));

// check string palindrome
function isPalindrome(str) {
    var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
}
var inputString = "A man, a plan, a canal, Panama";
var isPalindromic = isPalindrome(inputString);
console.log("Input string:", inputString);
console.log("Is palindrome:", isPalindromic);

// array of number and given array of even numbers
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even(arr2) {
    let n = arr2.length;
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (arr2[i] % 2 == 0)
            arr.push(arr2[i]);
    }
    return arr;
}
console.log(even(arr2));

// 2nd
function getEvenNumbers(a) {
    var evennumber = a.filter(function (num) {
        return num % 2 === 0;
    });
    return evennumber;
}
var array1 = [1, 2, 3, 4, 5];
var evennumber = getEvenNumbers(array1);
console.log("original:", array1);
console.log("even:", evennumber);

// remove duplicates from array
let arra = [1, 2, 3, 4, 3, 2];

function removeDuplicates(arr) {
    let n = arr.length;
    var result = [];
    for (let i = 0; i < n; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("original:", arra);
console.log("Remove duplicates:", removeDuplicates(arra));

// reverse a string
let str = "hello, world";
function reverse(str) {
    let n = str.length
    let str1 = "";
    for (let i = n - 1; i > -1; i--) {
        str1 += str[i];
    }
    return str1;
}
console.log("original:", str);
console.log("Reverse string:", reverse(str));

function reverseString(str) {
    var chars = str.split('');
    var reversedChars = chars.reverse();
    var reversedStr = reversedChars.join('');
    return reversedStr;
}
var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

