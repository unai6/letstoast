import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import axios from 'axios';
import randomCocktailView from '../Views/randomCocktailView';
import * as model from '../Models/RandomCocktailModel';


const nav = document.querySelectorAll('.on--login')
const logoutBtn = document.querySelector('.logout')
const addCocktail = document.getElementById('cocktail-button')
const bigList = document.getElementById('cocktail-list');


if (logoutBtn && sessionStorage.length > 0) {
   logoutBtn.style.display = 'block';
  nav.forEach((item) => item.classList.add('no-nav'));

} else if(logoutBtn && sessionStorage.length === 0){
   logoutBtn.style.display = 'none';
  nav.forEach((item) => item.classList.remove('no-nav'));
}

async function addList() {

  await model.fetchCocktail();

  const { cocktail } = model.state
  randomCocktailView.render(cocktail)
}

addCocktail !== null && addCocktail.addEventListener('click', addList)


const logOut = () => {
  sessionStorage.removeItem('users');
  window.location = './index.html'
}

logoutBtn !== null && logoutBtn.addEventListener('click', logOut)