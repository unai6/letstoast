//búsquedas a la API

fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  }); 
fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});
fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});

let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json);
});

const randomCocktail = []

function addList(){
    
  let bigList= document.getElementById('cocktail-list')

  randomCocktail.forEach(li => {

  let newList= document.createElement('li')
  newList.innerHTML= li
  bigList.appendChild(newList)
})

}

addList()

let myButton = document.getElementById("remove-button")

function toDelete(){
    //console.log('eliminar')
    let bigList= document.getElementById('cocktail-list')
    let lastChild= bigList.lastChild

    bigList.removeChild(lastChild)
    randomCocktail.pop()  


}

myButton.onclick = toDelete



addCocktail = document.getElementById('cocktail-button')

function oneCocktail(){
  let myData
  let bigList= document.getElementById('cocktail-list')

fetch(url)
.then(response => response.json())
.then(data => {
  //console.log(data.drinks[0])
let myData = {
  nombre: data.drinks[0].strDrink,
  categoria: data.drinks[0].strCategory,
  ingredientes1: data.drinks[0].strIngredient1,
  ingredientes2: data.drinks[0].strIngredient2,
  ingredientes3: data.drinks[0].strIngredient3,
  ingredientes4: data.drinks[0].strIngredient4,
  ingredientes5: data.drinks[0].strIngredient5,
  ingredientes6: data.drinks[0].strIngredient6,
  foto: data.drinks[0].strDrinkThumb,
  vaso: data.drinks[0].strGlass,
  instrucciones: data.drinks[0].strInstructions
}
//console.log(myData)

bigList.innerHTML =''
randomCocktail.push(JSON.stringify(myData))
addList()
});


}

addCocktail.onclick = oneCocktail

/*
function unai(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(function(response) {
  return response.json();
})
.then(json => json.drinks[0] )
.then (json => console.log(json))
}
unai()*/


let minombre = {
  nombre: 'Javi' ,
  edad: 32
}