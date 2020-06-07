let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'


let cocktail = []


const getCocktailsList = () => {

    let cocktailList = document.getElementById('famousCocktails');
    let newCocktailList = document.createElement('div');
    //  console.log(cocktail)
    cocktail.map(eachCocktail => {
        newCocktailList.setAttribute('class', 'css-glass col-lg');
        newCocktailList.innerHTML = ` 
        
        ${eachCocktail.join(' ')}
          
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
                <li style ='list-style-type:none; font-size:1.4em'> ${drinks.strDrink}</li>
                <img class='img-FC' src='${drinks.strDrinkThumb}'/> 
                <hr style='border:1px solid #f08080'>`
                
                );
                
            });
            cocktailList.innerHTML = '';
            cocktail.push(allCocktails);
           
            getCocktailsList();
        })

};
getFamousCocktailsList();



