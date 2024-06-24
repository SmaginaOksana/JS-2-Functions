let a = 0;
function squaredNums(min, max) {
  for (i = min; i <= max; i++) {
    a = i ** 2;
    console.log(a);
  }
  return a;
}
squaredNums(5, 20);
