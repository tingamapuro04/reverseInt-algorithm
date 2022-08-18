const reverseInt = (num) => {
  const newNum = parseInt(num.toString().split("").reverse().join(""));
  if (num < 0) {
    return newNum * -1;
  }
  return newNum;
};
console.log(reverseInt(-12));
