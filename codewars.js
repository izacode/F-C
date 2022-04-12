// 1) Descending Order==================================================================================================================================================

// function descendingOrder(n) {
//   //...
//   return +n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
// }

// 2) Money, Money, Money=========================================================================================================================================

// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;

//   while (principal < desired) {
//     let gains = principal * interest - principal * interest * tax;
//     principal += gains;
//     years++;
//   }
//   return years;
// }

// 3) Flatten and sort an array===================================================================================================================================

// function flattenAndSort(array) {
//   return array.reduce((acc, curr) => acc.concat(curr),[]).sort((a,b)=>a-b);
// }

// 4) Make a function that does arithmetic!! =====================================================================================================================
// function arithmetic(a, b, operator) {
//   const operations = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b,
//   };

//   return operations[operator](a, b);
// }

// 5) Anagram Detection===! =====================================================================================================================================
// var isAnagram = function(test, original) {
// return test.toLowerCase().split('').sort().join()===original.toLowerCase().split('').sort().join()
// };

// 6) The highest profit wins! ===================================================================================================================================

// function minMax(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   const min = sortedArr[0];
//   const max = sortedArr[sortedArr.length - 1];

//   return [min, max];
// }

// 7) Printer Errors        ===================================================================================================================================

// function printerError(s) {

//   let numerator = 0;
//   let denominator = 0;

//   s.split('').forEach(l=>{
//     denominator++
//     if(!l.match(/[a-m]/)){
//       numerator ++
//     }
//   })
//   return `${numerator}/${denominator}`
// }

// const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`; to check replace

// 8) Sum of a sequence        ===================================================================================================================================
// Mine
// const sequenceSum = (begin, end, step) => {
//   if (begin > end) return 0;
//   let sum = 0;
//   for (let num = begin; num <= end; num += step) {
//     sum += num;
//   }
//   return sum;
// };
// Best
// const sequenceSum = (begin, end, step) => {
//   if (begin > end) {
//     return 0;
//   }
//   return begin + sequenceSum(begin + step, end, step);
// };
// or   sequenceSum = (b, e, s) => (b > e ? 0 : b + sequenceSum(b + s, e, s));

// 9) Predict your age!        ===================================================================================================================================
// my
// function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
//   return Math.floor(
//     Math.sqrt(
//       Array.from(arguments)
//         .map((n) => Math.pow(n, 2))
//         .reduce((acc, val) => acc + val)
//     ) / 2
//   );
// }
// clever
// const predictAge = (...ages) => (Math.hypot(...ages) / 2) | 0;

// 10) JavaScript Array Filter       ===================================================================================================================================

// function getEvenNumbers(numbersArray) {
//   return numbersArray.filter((n) => !(n % 2));
// }

// 11) Summing a number's digits       ===================================================================================================================================

// function sumDigits(number) {
//   return Math.abs(number)
//     .toString()
//     .split("")
//     .reduce((acc, val) => acc + +val, 0);
// }

// 12) Summing a number's digits       ===================================================================================================================================

// const findLongest = (l) =>l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
