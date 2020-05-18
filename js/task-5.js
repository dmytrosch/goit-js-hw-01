let country = prompt("Введите страну");
let deliveryPrice;
let canDeliver;
country = country.toLowerCase();

switch (country) {
  case "китай":
    deliveryPrice = 100;
    break;

  case "чили":
    deliveryPrice = 250;
    break;

  case "австралия":
    deliveryPrice = 170;
    break;

  case "индия":
    deliveryPrice = 80;
    break;

  case "ямайка":
    deliveryPrice = 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
    canDeliver = false;    
}
if (canDeliver != false) {
  alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
}
