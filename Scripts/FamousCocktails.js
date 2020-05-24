let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'


let cocktail = []


var current_page = 1;
var records_per_page = 3;
        function prevPage() {
            if (current_page > 1) {
                current_page--;
                changePage(current_page);
            }
        }
        
        function nextPage() {
            if (current_page < numPages()) {
                current_page++;
                changePage(current_page);
            }
        }
        
        function changePage(page) {
            var btn_next = document.getElementById("btn_next");
            var btn_prev = document.getElementById("btn_prev");
            let cocktailList = document.getElementById('famousCocktails')
            var page_span = document.getElementById("page");
            
            // Validate page
            if (page < 1) page = 1;
            if (page > numPages()) page = numPages();
            
            cocktailList.innerHTML = "";
            
            for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
                cocktailList.innerHTML += newCocktailList[i].adName + "<br>";
            }
            page_span.innerHTML = page;
            
            if (page == 1) {
                btn_prev.style.visibility = "hidden";
            } else {
                btn_prev.style.visibility = "visible";
            }
        
            if (page == numPages()) {
                btn_next.style.visibility = "hidden";
            } else {
                btn_next.style.visibility = "visible";
            }
        }
        
        function numPages() {
            let newCocktailList = document.getElementsByClassName('css-glass')
            return Math.ceil(newCocktailList.length / records_per_page);
        }
        
        window.onload = function () {
            changePage(1);
        };
        
const getCocktailsList = () => {

    let cocktailList = document.getElementById('famousCocktails');
    let newCocktailList = document.createElement('div');
    console.log(cocktail)
    cocktail.map(eachCocktail => {
        newCocktailList.setAttribute('class', 'css-glass ');
        newCocktailList.innerHTML = ` 
        <div class='col-lg-12 row mx-auto'>
        ${eachCocktail.join(' ')}
        </div>    
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



