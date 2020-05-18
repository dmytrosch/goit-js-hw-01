let credits = 23580;
const pricePerDroid = 3000;
let wantToBuy;
let totalPrice;

while (true) {
  wantToBuy = prompt("Количество дронов:");
  console.log(wantToBuy);
  if (wantToBuy === null) {
    alert("Отменено пользователем!");
    break;
  }
  wantToBuy = Number(wantToBuy);

  if (!Number(wantToBuy) || wantToBuy <= 0) {
    alert("Недопустимое значение. Попробуйте снова");
    continue;
  }
  totalPrice = wantToBuy * pricePerDroid;
  console.log(totalPrice);

  if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
    continue;
  } else {
    credits -= totalPrice;
    alert(
      `Вы купили ${wantToBuy} дроидов, на счету осталось ${credits} кредитов.`
    );
    break;
  }
}
