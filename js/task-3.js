const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let password;

password = prompt("Введите пароль");
console.log(password);

switch (password) {
  case null:
    message = "Отменено пользователем!";
    break;

  case ADMIN_PASSWORD:
    message = "Добро пожаловать!";
    break;

  default:
    message = "Доступ запрещен, неверный пароль!";
}

alert(message);
