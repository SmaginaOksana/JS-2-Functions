function calcPrice(num) {
  let a;
  num >= 7
    ? (a = num * 40 - 50)
    : num >= 3
    ? (a = num * 40 - 20)
    : (a = num * 40);
  return a;
}
console.log(calcPrice(5));
