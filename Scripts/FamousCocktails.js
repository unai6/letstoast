let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'


let cocktail = []


const getCocktailsList = () => {

    let cocktailList = document.getElementById('famousCocktails');
    let newCocktailList = document.createElement('div');
    console.log(cocktail)
    cocktail.map(eachCocktail => {
        newCocktailList.setAttribute('class', 'css-glass ');
        newCocktailList.innerHTML = ` 
        <ul class='col-lg-12 row mx-auto '>
        ${eachCocktail.join(' ')}
        </ul>    
        `
    })

    cocktailList.appendChild(newCocktailList);
    console.log(cocktailList)
}

function getFamousCocktailsList() {

    let cocktailList = document.getElementById('famousCocktails');

    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            //console.log(data.drinks)
            let allCocktails = data.drinks.map(drinks => {
                return (
                    `
                <li style ='list-style-type:none'> ${drinks.strDrink}</li>
                <img src='${drinks.strDrinkThumb}'/> `
                );
                
            });
            cocktailList.innerHTML = '';
            cocktail.push(allCocktails);
           
            getCocktailsList();
        })

};
getFamousCocktailsList();



