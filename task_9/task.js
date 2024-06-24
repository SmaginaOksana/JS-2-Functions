function checkNumber(n) {
  for (i = 1; i <= n; i += 0.5) {
    i % 1 === 0 ? console.log(i + " integer") : console.log(i + " decimal");
  }
}
checkNumber(5);
