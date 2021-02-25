import { SignUpValidator } from './Validator';
import User from './User';
let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUpButton = document.querySelector(".button");


let usersDB = JSON.parse(localStorage.getItem('users'))

signUpButton.addEventListener("click", function(event){
    event.preventDefault();
    deleteErrors();
    
    if (checkValidUser()){
        console.log("user registered")
        createUser(userName.value, email.value, password.value)
        window.location = './SignUp_successfully.html'
    };
})

function checkValidUser() {
    let signUpValidator = new SignUpValidator(userName.value, email.value, password.value);
    let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;

    if(!signUpValidator.checkUserName()){
        signUpValidator.errorCreator("Por favor introduce un usuario válido", userName)
        validUser=false
        return;
    }
    if(!signUpValidator.checkEmail()){
        signUpValidator.errorCreator("Por favor, introduce una dirección de mail válida", email)
        validUser=false
    }
    if(!signUpValidator.checkPassword()){
        signUpValidator.errorCreator("Por favor, introduce una contraseña válida", password)
        validUser=false
        return;
    }
  
    if (signUpValidator.checkEmailInDB(usersDB)){
        signUpValidator.errorCreator("Este mail ya existe", email)
        validUser=false
    }

    return validUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser (name, email, password) {
    const newUser = new User(name, email, password)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }

    localStorage.setItem('users', JSON.stringify(usersDB));
    sessionStorage.setItem('users', JSON.stringify(usersDB));

} 