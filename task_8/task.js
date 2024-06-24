function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB(a, b, c) {
  let result = "rgb(" + a + "," + b + "," + c + ")";
  return result;
}
console.log(
  getRandomRGB(
    getRandomInteger(0, 255),
    getRandomInteger(0, 255),
    getRandomInteger(0, 255)
  )
);
