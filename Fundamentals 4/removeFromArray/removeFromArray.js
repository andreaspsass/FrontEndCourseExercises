const removeFromArray = function (arr,...arguments) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
};

module.exports = removeFromArray;
