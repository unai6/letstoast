"use strict";

class Validator {
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    checkUserName () {
        return this.userName ? true : false
    }

    checkEmail () {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email) ? true : false
    }

    checkPassword () {
        if (!this.password){
            return false
        } else if (this.password.length < 6){
            return false
        } else {
            return true
        }
    }
    
    errorCreator (message, location) {
        console.log(message, location)
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = message
        console.log(form);
        console.log(div)
        form.insertBefore(div, location)
    }

    deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }
}

class SignUpValidator extends Validator {
    constructor (userName, email, password){
        super(userName, email, password);
    }

    checkEmailInDB (usersDB){
        let userExists = false;

        if (!usersDB){
            return false;
        }
        else{
            usersDB.forEach(user => {
                if (user.email === this.email){
                    userExists= true
                }
            })
        }
        return userExists;
    }

   
}

class LogInValidator extends Validator {
    constructor (userName,email, password){
        super(userName, email, password);
    }

    checkEmailInDB (string){
        let emailInDb = false
        if (!usersDB){
        
            emailInDb = false
        }
        else{
            usersDB.forEach(user => {
                if (user.email === string){emailInDb = true}
               
            })
        }
        return emailInDb
    }

}