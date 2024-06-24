let number = +prompt("Сколько чисел нужно вывести?");
let a = 0;
for (i = 0; i < number; i++) {
  if (i >= 0 && i < 100) {
    a = i * i;
    console.log(a);
  } else {
    console.log("Число не входит в диапазон от 0 до 100");
  }
}
