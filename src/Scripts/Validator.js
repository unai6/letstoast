"use strict";
let form = document.querySelector(".form-group");
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
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = message
        form.append(div, location)
    }

    deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }
}

export class SignUpValidator extends Validator {
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

export class LogInValidator extends Validator {
    constructor (userName,email, password){
        super(userName, email, password);
    }

    checkEmailInDB (usersDB, string){
        let emailInDb = false
        if (!usersDB){
            emailInDb = false
        }
        else{
            usersDB.forEach(user => {
                if (user.email === string){
                    emailInDb = true
                }
               
            })
        }
        return emailInDb
    }


}