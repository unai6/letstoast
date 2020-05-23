//llamadas a la API

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

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php/')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json);
});




const randomCocktail = []

function addList(){
    
  let bigList= document.getElementById('cocktail-list')

  randomCocktail.forEach(bebida => {
    console.log(bebida)
  let newList= document.createElement('div')
  newList.innerHTML= `
  Name: ${bebida.nombre}<br>
  Glass: ${bebida.vaso}<br>
  Ingredients: ${bebida.ingredientes} <br>
  Instructions: ${bebida.instrucciones}<br>
  Voilà: <img src="${bebida.foto}"><br>
  `
  bigList.appendChild(newList)
  
})

}

addList()

let myButton = document.getElementById("remove-button")

function toDelete(){
    //console.log('eliminar')
    let bigList= document.getElementById('cocktail-list')
    let lastChild= bigList.lastElementChild

    bigList.removeChild(lastChild)
    randomCocktail.pop()  
}

myButton.onclick = toDelete



addCocktail = document.getElementById('cocktail-button')

function oneCocktail(){
  let bigList= document.getElementById('cocktail-list')

fetch(url)
.then(response => response.json())
.then(data => {
  //console.log(data.drinks[0])
  
let myData = {
  nombre: data.drinks.map(ingredient => ingredient.strDrink),
  ingredientes: 
  `${data.drinks.map(ingredient => ingredient.strIngredient1 !== null ? `${ingredient.strIngredient1},` : '')}
   ${data.drinks.map(ingredient => ingredient.strIngredient2 !== null ? `${ingredient.strIngredient2},`: '')}
   ${data.drinks.map(ingredient => ingredient.strIngredient3 !== null ? `${ingredient.strIngredient3},`: '')}  
   ${data.drinks.map(ingredient => ingredient.strIngredient4 !== null ? `${ingredient.strIngredient4},`: '')}
   ${data.drinks.map(ingredient => ingredient.strIngredient5 !== null ? `${ingredient.strIngredient5},`: '')} 
   
   `,
  foto: data.drinks.map(ingredient => ingredient.strDrinkThumb),
  vaso:  data.drinks.map(ingredient => ingredient.strGlass),
  instrucciones:  data.drinks.map(ingredient => ingredient.strInstructions)
}
//console.log(myData)

bigList.innerHTML =''
randomCocktail.push(myData)
addList()
});


}

addCocktail.onclick = oneCocktail

