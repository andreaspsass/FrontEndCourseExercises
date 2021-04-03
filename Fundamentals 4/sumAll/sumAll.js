const sumAll = function (num1, num2) {
  let finalSum = 0;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (num1 < num2) {
    return ((num2 - num1 + 1) * (num1 + num2)) / 2;
  } else {
    return ((num1 - num2 + 1) * (num1 + num2)) / 2;
  }
};
// else if (num1 < num2 ){
//     for(let i = num1; i <= num2; i++){
//             // i += num2
//             finalSum +=i ;
//             // return finalSum
//         }

module.exports = sumAll;
