let url='https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'


fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});

const oneGlass = [];

function addGlass(){

    let glassList = document.getElementById('glass-list');
   // console.log(glassList)

    oneGlass.forEach(glass =>{

    let newGlass= document.createElement('div')
    newGlass.innerHTML =`
    nuevo vaso: ${glass.drinks}

    `
    glassList.appendChild(newGlass)
    })

}

addGlass()

let glassButton = document.getElementsByClassName('remove-glass-btn')

function removeGlass(){
    let glassList = document.getElementById('glass-list');

    let lastChild = glassList.lastElementChild

    glassList.removeChild(lastChild);
    glassList.pop()

}

glassButton.onclick = removeGlass