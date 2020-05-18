const total = 100;
const ordered = 50;

if (ordered > total) {
  alert("На складе недостаточно товаров!");
} else if (ordered <= 0 || ordered === null || !Number(ordered)) {
  console.log(!Number(ordered));
  
  alert("Неверное количество");
} else {
  alert("Заказ оформлен, с вами свяжется менеджер");
}
