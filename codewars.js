// 1) Descending Order================================================================

// function descendingOrder(n) {
//   //...
//   return +n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
// }

// 2) Money, Money, Money==============================================================

// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;

//   while (principal < desired) {
//     let gains = principal * interest - principal * interest * tax;
//     principal += gains;
//     years++;
//   }
//   return years;
// }

// 3) Flatten and sort an array========================================================

// function flattenAndSort(array) {
//   return array.reduce((acc, curr) => acc.concat(curr),[]).sort((a,b)=>a-b);
// }


// 4) Make a function that does arithmetic!=============================================

// function arithmetic(a, b, operator) {
//   const operations = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b,
//   };

//   return operations[operator](a, b);
// }