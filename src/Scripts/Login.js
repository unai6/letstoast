import { LogInValidator } from './Validator';

let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

let loginButton = document.getElementsByClassName("log-in button")[0];
const usersDB = JSON.parse(localStorage.getItem("users"));

function checkLogUser() {
  let logInValidator = new LogInValidator(userName.value, email.value, password.value);
  let userInDB = true;

  if (!logInValidator.checkUserName()) {
    logInValidator.errorCreator('por favor registrate', userName)
    userInDB = false;
  };

  if (!logInValidator.checkEmail(usersDB, email)) {
    logInValidator.errorCreator('por favor registrate', email)
    userInDB = false;
  };

  if (!logInValidator.checkPassword()) {
    logInValidator.errorCreator('por favor registrate', password)
    userInDB = false;
  };

  if (logInValidator.checkEmailInDB(usersDB)) {
    logInValidator.errorCreator('por favor registrate', email)
    userInDB = false;
  };

  return userInDB;
}


loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  deleteErrors();

  if (checkLogUser()) {
    sessionStorage.setItem('users', JSON.stringify(usersDB))
    window.location = './Login_successfully.html'
  }
});


function deleteErrors() {
  let errors = document.querySelectorAll(".error")
  errors ? errors.forEach(error => error.remove()) : null;
}






