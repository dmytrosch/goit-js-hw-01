let credits = 23580;
const pricePerDroid = 3000;
let wantToBuy;
let totalPrice;
let canBuy = false;

while (canBuy = false);
{
  wantToBuy = prompt("Количество дронов:");
  wantToBuy = Number(wantToBuy);
  if (wantToBuy == 0) {
    alert("Отменено пользователем!");
    canBuy = false;
  } else {
    totalPrice = wantToBuy * pricePerDroid;

    if (totalPrice > credits) {
      alert("Недостаточно средств на счету!");
      canBuy = false;
    } else {
      credits -= totalPrice;
      alert(
        `Вы купили ${wantToBuy} дроидов, на счету осталось ${credits} кредитов.`);
        canBuy = true;
    };
    }
  }
