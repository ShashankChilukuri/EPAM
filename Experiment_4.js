function reverseNumber(num) {
    let isNegative = num < 0;
    let reversedStr = Math.abs(num).toString().split('').reverse().join('');
    let result;
if (isNegative) {
    result = -parseInt(reversedStr);
} else {
    result = parseInt(reversedStr);
}
return result;

}

// Test cases
console.log(reverseNumber(12345));  // Output: 54321
console.log(reverseNumber(-56789)); // Output: -98765
console.log(reverseNumber(1000));   // Output: 1
console.log(reverseNumber(0));      // Output: 0
