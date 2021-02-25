import { async } from 'regenerator-runtime';
import axios from 'axios'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

export const state = {
    search: {
        results: [],
        page: 1,
        resultsPerPage: 10
    },

}


export async function fetchCocktailsController() {
    try {
        const response = await axios.get(url)
        const { data } = response;

        state.search.results = data.drinks.map((drink) => {
            return {
                name: drink.strDrink,
                image: drink.strDrinkThumb
            }
        })

    } catch (err) {

        console.log(err)
    }


};
