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