let input;
let total = 0;

while (true) {
  input = prompt("Введите число");
  if (input == null) {
    break;
  }
  if (!Number(input) && input != 0) {
   alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    input = Number(input);
    total += input;
    continue;
  }
}
alert(`Общая сумма чисел равна ${total}`)
