let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

let logInButton = document.getElementById("log-in-submit-button");
let form = document.getElementsByClassName("Login-form")[0];
let formWrapper = document.getElementsByClassName('background-imageLI')[0];
let loginButton = document.getElementsByClassName("log-in button")[0];

let usersDB = JSON.parse(localStorage.getItem('users'));


function checkLogUser(){
    let usersDB = JSON.parse(localStorage.getItem("users"));
    let logInValidator= new LogInValidator(userName.value, email.value, password.value);
    let userInDB = true
   
  if(!logInValidator.checkUserName()){
      logInValidator.errorCreator('por favor registrate', userName)
        userInDB = false
  } 

  if(!logInValidator.checkEmail()){
     logInValidator.errorCreator('por favor registrate', email)
        userInDB= false
  }

  if(!logInValidator.checkPassword()){
    logInValidator.errorCreator('por favor registrate', password)
        userInDB = false
  }

  if (logInValidator.checkEmailInDB(usersDB)){
    logInValidator.errorCreator('por favor registrate', email)
        userInDB=false
}

 return userInDB
}


loginButton.addEventListener("click", function(event){
    event.preventDefault();
    deleteErrors();
    
   if (checkLogUser()){
        console.log('succesfully log in')
       window.location = 'cocktelproject.html'
       }
});


    function deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }


 
    


