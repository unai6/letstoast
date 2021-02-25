import 'core-js/stable';
import 'regenerator-runtime/runtime';

const nav = document.querySelectorAll('.on--login');
const logoutBtn = document.querySelector('.logout');
const inputLocation = document.querySelector('#current--location');
const searchLocation = document.querySelector('.google-class-3')


const searchCocktailBar = () => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords 
        inputLocation.value = `${latitude},${longitude}`;
    })
  }
}

searchLocation.addEventListener('submit', searchCocktailBar());

if (sessionStorage.length > 0) {
  logoutBtn.style.display = 'block';
  nav.forEach((item) => item.classList.add('no-nav'));

} else if (sessionStorage.length === 0) {
  logoutBtn.style.display = 'none';
  nav.forEach((item) => item.classList.remove('no-nav'));
}

const logOut = () => {
  sessionStorage.removeItem('users');
  window.location = './index.html'
}

logoutBtn !== null && logoutBtn.addEventListener('click', logOut)